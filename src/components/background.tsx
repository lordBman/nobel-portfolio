import { onCleanup, onMount, createEffect } from "solid-js";
import Graphics from "../utils/graphics";

const Background = (props: { isDark: boolean }) => {
    let containerRef: HTMLDivElement | undefined;    

    createEffect(() => {
        if(containerRef) {
            const graphics = new Graphics(containerRef, props.isDark);
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