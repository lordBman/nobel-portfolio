import * as THREE from 'three';

namespace Constants {
    export const UNIT_SIZE = 1.0;
    export const NEAR_LIMIT = -40.0;
    export const FAR_LIMIT = 40.0;
    export const CUBOID_COUNT = 180;
    export const bgColor = 0x0b1120;
    export const MIN_SPEED = 3;
    export const MAX_SPEED = 5;
}

namespace RandomUtils {
    export const random = (min: number, max: number) => min + Math.random() * (max - min);
    
    export const randomPosition = () => {
        let choice = Math.random()
        if(choice <= 0.5){
            choice = Math.random()
            if(choice <= 0.5){
                return { x: random(-12, -4), y: random(-12, 12) };
            }
            return { x: random(4, 12), y: random(-12, 12) };
        }

        choice = Math.random()
        if(choice <= 0.5){
            return { x: random(-12, 12), y: random(-12, -4) };
        }
        return { x: random(-12, 12), y: random(4, 12) };
    }

    export const randomDepth = () => random(Constants.UNIT_SIZE, Constants.UNIT_SIZE * 3);
}


// --- Create a cuboid mesh with given dimensions and position ---
const createCuboid = (material: THREE.MeshStandardMaterial, width: number, height: number, depth: number, x: number, y: number, z: number, speed: number) => {
    const geometry = new THREE.BoxGeometry(width, height, depth);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    (mesh as any).userData = { speed };

    return mesh;
};

const respawnCuboid = (mesh: THREE.Mesh) => {
    const depth = RandomUtils.randomDepth();
      
    // Dispose old geometry to avoid memory leaks
    const oldGeo = mesh.geometry;
    mesh.geometry = new THREE.BoxGeometry(Constants.UNIT_SIZE, Constants.UNIT_SIZE, depth);
    oldGeo.dispose();

    // Randomize position within view
    const newPosition = RandomUtils.randomPosition();
    console.log(newPosition)
    const newZ = Constants.NEAR_LIMIT - RandomUtils.random(0, 6)  
    mesh.position.set(newPosition.x, newPosition.y, newZ);
    (mesh as any).userData = { speed: RandomUtils.random(Constants.MIN_SPEED, Constants.MAX_SPEED) };
};

const initializeCuboids = (scene: THREE.Scene, boxMaterial: THREE.MeshStandardMaterial) => {
    const cuboids: THREE.Mesh[] = [];
    for (let i = 0; i < Constants.CUBOID_COUNT; i++) {
        const depth = RandomUtils.randomDepth();
        const newPosition = RandomUtils.randomPosition();  
        // Spread initial Z positions across the whole depth to avoid clumping
        const zPos = RandomUtils.random(Constants.NEAR_LIMIT, Constants.FAR_LIMIT);
        const speed = RandomUtils.random(Constants.MIN_SPEED, Constants.MAX_SPEED)
        const cuboid = createCuboid(boxMaterial, Constants.UNIT_SIZE, Constants.UNIT_SIZE, depth, newPosition.x, newPosition.y, zPos - depth, speed);
        cuboids.push(cuboid);

        scene.add(cuboid)
    }

    return cuboids;
}

class Graphics {
    private scene: THREE.Scene
    private camera: THREE.PerspectiveCamera
    private dirLightA: THREE.DirectionalLight
    private dirLightB: THREE.DirectionalLight
    private cuboids: THREE.Mesh[]
    private boxMaterial: THREE.MeshStandardMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.1,
        metalness: 0.02,
        emissive: 0xffffff,
        emissiveIntensity: 0.2
    });
    private animationId?: number;
    private containerRef: HTMLDivElement
    private active: boolean = true

    renderer: THREE.WebGLRenderer

    constructor(containerRef: HTMLDivElement) {
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);

        this.containerRef = containerRef
        this.containerRef.appendChild(this.renderer.domElement);

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(Constants.bgColor);
        this.scene.fog = new THREE.FogExp2(Constants.bgColor, 0.045); // Fog masks spawning/disappearing

        this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.set(0, 0, 20);
        this.camera.lookAt(0, 0, 0);

        this.dirLightA = new THREE.DirectionalLight(0xffffff, 1.6);
        this.dirLightA.position.set(5, 6, 4);
        this.scene.add(this.dirLightA);

        this.dirLightB = new THREE.DirectionalLight(0xffffff, 1.6);
        this.dirLightB.position.set(-5, -6, 4);
        this.scene.add(this.dirLightB);

        this.cuboids = initializeCuboids(this.scene, this.boxMaterial);

        window.addEventListener('resize', this.handleResize);
    }

    // --- Handle Window Resize ---
    handleResize = () => {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    };

    async start(){
        let lastTime = performance.now();

        const animate = () =>{
            const now = performance.now();
            let delta = (now - lastTime) / 1000; // Cap delta for stability
            lastTime = now;
            
            this.cuboids.forEach(cuboid => {
                // Move cuboid towards the camera
                const speed = (cuboid as any).userData.speed;
                cuboid.position.z += speed * delta;
                // If cuboid has passed the camera, respawn it
                if (cuboid.position.z > Constants.FAR_LIMIT) {
                    respawnCuboid(cuboid);
                }
            });

            this.renderer.render(this.scene, this.camera);
            if(this.active){
                this.animationId = requestAnimationFrame(animate);
            }
        }
        this.animationId = requestAnimationFrame(animate);
    }

    dispose = () => {
        this.active = false
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }

        this.cuboids.forEach(cuboid => {
            cuboid.geometry.dispose();
            this.scene.remove(cuboid);
        });
        this.renderer.dispose();
        this.boxMaterial.dispose();
        this.dirLightA.dispose();
        this.dirLightB.dispose();
        window.removeEventListener('resize', this.handleResize);

        if (this.containerRef && this.renderer.domElement.parentNode === this.containerRef) {
            this.containerRef.removeChild(this.renderer.domElement);
        }
    };
}

export default Graphics;