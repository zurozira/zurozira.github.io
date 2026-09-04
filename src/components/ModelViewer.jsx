import { useEffect } from "react";

function ModelViewer() {
    useEffect(() => {
        import("@google/model-viewer");
    }, []);

    return (
        <model-viewer
            src="/assets/classic_com.glb"
            alt="A classic computer 3D model"
            camera-controls
            disable-zoom
            disable-tap
            auto-rotate
            shadow-intensity="1"
        />
    );
}

export default ModelViewer;
