import { useEffect, useState } from "react";

const bootLines = [
    { text: "$ boot --profile congvu", color: "#fffcf1" },
    { text: "   interface ....... ok" },
    { text: "   application ..... ok" },
    { text: "   system .......... ok" },
    { text: "- all layers online", color: "coral" },
];

function Terminal() {
    const [visibleText, setVisibleText] = useState("");

    useEffect(() => {
        let cancelled = false;

        async function playSequence() {
            while (!cancelled) {
                let accumulated = "";

                for (const line of bootLines) {
                    for (const char of line.text) {
                        if (cancelled) return;
                        accumulated += char;
                        setVisibleText(accumulated + "\n".repeat(0));
                        await sleep(40);
                    }
                    accumulated += "\n";
                    await sleep(500);
                }

                await sleep(500);

                while (accumulated.length > 0 && !cancelled) {
                    accumulated = accumulated.slice(0, -1);
                    setVisibleText(accumulated);
                    await sleep(15);
                }
            }
        }

        function sleep(ms) {
            return new Promise((resolve) => window.setTimeout(resolve, ms));
        }

        playSequence();

        return () => {
            cancelled = true;
        };
    }, []);

    return (
        <div className="terminal">
            <div className="terminal-header">
                <span>●</span>
                <span>●</span>
                <span className="coralText">●</span>
                SESSION
            </div>

            <pre className="terminal-content">
                <code>{visibleText}█</code>
            </pre>
        </div>
    );
}

export default Terminal;
