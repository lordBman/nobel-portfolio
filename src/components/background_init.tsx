import { onMount, onCleanup } from 'solid-js';
import * as THREE from 'three';

// Helper: random float between min and max
const randomRange = (min: number, max: number) => min + Math.random() * (max - min);

/**
 * Portfolio Background Component
 * Renders an infinite stream of white cuboids moving towards the camera.
 * Features: varied heights, fog for smooth spawning/despawning, dynamic shadows.
 */
export default function Background() {
  let containerRef: HTMLDivElement | undefined;

  onMount(() => {
    if (!containerRef) return;

    // --- Setup Scene, Camera, Renderer ---
    const scene = new THREE.Scene();
    // Slightly dark white / off-white atmosphere
    const bgColor = 0xffffff;
    scene.background = new THREE.Color(bgColor);
    scene.fog = new THREE.FogExp2(bgColor, 0.045); // Fog masks spawning/disappearing

    // Camera: position to see incoming objects clearly
    const camera = new THREE.PerspectiveCamera(
      67,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 2.5, 12);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = false; // Enable shadows for contrast
    //renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Softer shadows
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.appendChild(renderer.domElement);

    // --- Lighting (for shadows & depth) ---
    // Ambient light for base illumination
    //const ambientLight = new THREE.AmbientLight(0xaaaaaa, 0.5);
    //scene.add(ambientLight);

    // Main directional light (casts shadows)
    const dirLightA = new THREE.DirectionalLight(0xffffff, 1.6);
    dirLightA.position.set(5, 6, 4);
    /*dirLight.castShadow = true;
    dirLight.receiveShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.camera.near = 0.5;
    dirLight.shadow.camera.far = 25;
    dirLight.shadow.camera.left = -8;
    dirLight.shadow.camera.right = 8;
    dirLight.shadow.camera.top = 8;
    dirLight.shadow.camera.bottom = -8;*/
    scene.add(dirLightA);

    const dirLightB = new THREE.DirectionalLight(0xffffff, 1.6);
    dirLightB.position.set(-5, -6, 4);
    /*dirLight.castShadow = true;
    dirLight.receiveShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.camera.near = 0.5;
    dirLight.shadow.camera.far = 25;
    dirLight.shadow.camera.left = -8;
    dirLight.shadow.camera.right = 8;
    dirLight.shadow.camera.top = 8;
    dirLight.shadow.camera.bottom = -8;*/
    scene.add(dirLightB);

    // Fill light from below and back to soften harshness
    /*const fillLight = new THREE.PointLight(0x888888, 2);
    fillLight.position.set(0, -2, 3);
    scene.add(fillLight);*/

    // Rim light to enhance edges
    /*const rimLight = new THREE.PointLight(0xaaaaaa, 2);
    rimLight.position.set(-2, 3, -4);
    scene.add(rimLight);*/

    // Optional subtle back rim
    /*const backRim = new THREE.PointLight(0xeeeeee, 1);
    backRim.position.set(2, 2, -5);
    scene.add(backRim);*/

    // --- Shared Material for all cuboids (efficient) ---
    const boxMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.1,
      metalness: 0.02,
      emissive: 0xffffff,
      emissiveIntensity: 0.2
    });

    // Fixed width (X) and depth (Z) — equal for all cuboids
    const FIXED_WIDTH = 1.0;
    const FIXED_HEIGHT = 1.0;

    // Spawn / Despawn boundaries
    const NEAR_LIMIT = -20.0;   // Remove when passed this Z
    const FAR_LIMIT = 40.0;    // Reset to this Z + random offset
    
    // Speed range (units per second)
    const MIN_SPEED = 4;
    const MAX_SPEED = 4;
    
    // Helper: random height (length) — the varied dimension
    const randomDepth = () => randomRange(FIXED_WIDTH, FIXED_WIDTH * 2);

    // Helper: random X position within visible range (avoid edges)
    const randomX = () => {
        const choice = Math.random()
        if(choice <= 0.5){
            return randomRange(2, 12);
        }
        return randomRange(-12, -2);
    }
    
    // Helper: random Y position, adjusted for height to keep visual balance
    const randomY = () => {
        const choice = Math.random()
        if(choice <= 0.5){
            return randomRange(2, 9);
        }
        return randomRange(-9, -2);
    }

    // --- Create a cuboid mesh with given dimensions and position ---
    const createCuboid = (width: number, height: number, depth: number, x: number, y: number, z: number, speed: number) => {
      const geometry = new THREE.BoxGeometry(width, height, depth);
      const mesh = new THREE.Mesh(geometry, boxMaterial);
      mesh.position.set(x, y, z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      // Store custom properties for animation
      (mesh as any).userData = { speed, originalHeight: height };
      return mesh;
    };

    // --- Update a cuboid when it respawns (new height, position, speed) ---
    const respawnCuboid = (mesh: THREE.Mesh) => {
      // Generate new random height (varied length dimension)
      const newHeight = FIXED_HEIGHT;
      const newWidth = FIXED_WIDTH;
      const newDepth = randomDepth();
      
      // Dispose old geometry to avoid memory leaks
      const oldGeo = mesh.geometry;
      mesh.geometry = new THREE.BoxGeometry(newWidth, newHeight, newDepth);
      oldGeo.dispose();
      
      // Randomize position within view
      const newX = randomX();
      const newY = randomY();
      const newZ = NEAR_LIMIT - randomRange(0, 5.5);
      mesh.position.set(newX, newY, newZ);
      
      // Random speed for organic movement
      const newSpeed = randomRange(MIN_SPEED, MAX_SPEED);
      (mesh as any).userData = { speed: newSpeed, originalHeight: newHeight };
    };

    // --- Initialize 180 cuboids for a dense, dynamic flow ---
    const CUBOID_COUNT = 180;
    const cuboids: THREE.Mesh[] = [];

    for (let i = 0; i < CUBOID_COUNT; i++) {
      const depth = randomDepth();
      const xPos = randomX();
      const yPos = randomY();
      // Spread initial Z positions across the whole depth to avoid clumping
      const zPos = randomRange(NEAR_LIMIT, FAR_LIMIT);
      const speed = randomRange(MIN_SPEED, MAX_SPEED);
      
      const cuboid = createCuboid(FIXED_WIDTH, FIXED_HEIGHT, depth, xPos, yPos, zPos, speed);
      scene.add(cuboid);
      cuboids.push(cuboid);
    }

    // --- Animation Loop with Delta Time ---
    let animationId: number;
    let lastTime = performance.now();
    
    const animate = () => {
      const now = performance.now();
      let delta = Math.min(0.033, (now - lastTime) / 1000); // Cap delta for stability
      lastTime = now;
      
      // Update each cuboid: move forward (negative Z direction) and respawn if past near limit
      for (let i = 0; i < cuboids.length; i++) {
        const cuboid = cuboids[i];
        const speed = (cuboid as any).userData.speed;
        // Move away from camera (increasing Z)
        cuboid.position.z += speed * delta;
        
        // Check if cuboid has passed the near limit (out of view)
        if (cuboid.position.z > FAR_LIMIT) {
          respawnCuboid(cuboid);
        }
      }
      
      // Slight camera drift? Not needed but optional tiny rotation for dynamism? Better keep static.
      // For extra polish, gently rotate directional light? Not necessary, but adds life.
      // Uncomment next line if you want very subtle light movement (optional)
      // dirLight.position.x = 5 + Math.sin(Date.now() * 0.0005) * 0.5;
      
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // --- Handle Window Resize ---
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    
    // --- Cleanup on component unmount ---
    onCleanup(() => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      
      // Dispose geometries and materials to avoid memory leaks
      cuboids.forEach(cuboid => {
        cuboid.geometry.dispose();
        scene.remove(cuboid);
      });
      boxMaterial.dispose();
      //ambientLight.dispose();
      dirLightA.dispose();
      dirLightB.dispose();
      /*fillLight.dispose();
      rimLight.dispose();
      backRim.dispose();*/
      renderer.dispose();
      
      if (containerRef && renderer.domElement.parentNode === containerRef) {
        containerRef.removeChild(renderer.domElement);
      }
    });
  });
  
  // --- Styles: fullscreen background, behind content ---
  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        'z-index': -1,
        overflow: 'hidden',
      }}
    />
  );
}