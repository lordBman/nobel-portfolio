import { onCleanup, onMount } from "solid-js";
import Graphics from "../utils/graphics";

const Background = () => {
    let containerRef: HTMLDivElement | undefined;

    onMount(() => {
        if(containerRef) {
            const graphics = new Graphics(containerRef);
            graphics.start();

            onCleanup(() => {
                graphics.dispose();
            });
        }
    });

    return (
        <div ref={containerRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 'z-index': -1, overflow: 'hidden'}} />
    );
}

export default Background;