import { useEffect, useRef, useState } from "react";

function CustomCursor() {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const [isFinePointer, setIsFinePointer] = useState(true);

    useEffect(() => {
        const finePointer = window.matchMedia("(pointer: fine)");
        setIsFinePointer(finePointer.matches);

        if (!finePointer.matches) return;

        function handleMouseMove(event) {
            const x = event.clientX;
            const y = event.clientY;

            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
            }
            if (ringRef.current) {
                ringRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
            }
        }

        function handleMouseOver(event) {
            const isInteractive = event.target.closest("a, button");
            ringRef.current?.classList.toggle(
                "hovered",
                Boolean(isInteractive),
            );
        }

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    if (!isFinePointer) return null;

    return (
        <>
            <div ref={dotRef} className="cursor-dot" />
            <div ref={ringRef} className="cursor-ring" />
        </>
    );
}

export default CustomCursor;
