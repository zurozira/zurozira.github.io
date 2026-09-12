import { useEffect, useState } from "react";

const phrases = [
    "CONG.VU",
    "SASKPOLYTECH",
    "SYSTEM_OVERRIDE",
    "INITIALIZING...",
];

function ScrambleText() {
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        const targetText = phrases[phraseIndex];
        const symbols = "ｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ10X█▓▒░";

        let revealedCharacters = 0;

        const intervalId = window.setInterval(() => {
            const scrambledText = targetText
                .split("")
                .map((character, index) => {
                    if (character === " ") {
                        return " ";
                    }

                    if (index < revealedCharacters) {
                        return character;
                    }

                    const randomIndex = Math.floor(
                        Math.random() * symbols.length,
                    );
                    return symbols[randomIndex];
                })
                .join("");

            setDisplayText(scrambledText);

            revealedCharacters += 0.25;

            if (revealedCharacters >= targetText.length) {
                window.clearInterval(intervalId);

                window.setTimeout(() => {
                    setPhraseIndex((currentIndex) => {
                        return (currentIndex + 1) % phrases.length;
                    });
                }, 2500);
            }
        }, 30);

        return () => {
            window.clearInterval(intervalId);
        };
    }, [phraseIndex]);

    return <h2 className="scramble">{displayText}</h2>;
}

function Hero() {
    return (
        <section className="hero">
            <p className="availability">
                <span className="coralText">●</span> Open to roles
            </p>

            <h1 className="bigh1">
                Exploring where I fit in <span className="coralText">tech</span>
            </h1>

            <p>
                I switched from business into computer science and I’m still
                exploring what fits best: backend, game dev, systems, or some
                mix of them. <br /> <br />
                The thing I’m actually good at is{" "}
                <span className="coralText">adaptation</span>: I pick up new
                tools, languages, and environments fast, and I kind of enjoy
                the chaos of it. <br /> <br />
                Right now I’m in year two of the{" "}
                <span className="coralText">Business Information Systems</span>{" "}
                program at{" "}
                <span className="coralText">Saskatchewan Polytechnic</span>,
                and I’m open to any role where I can keep learning and building
                real stuff.
            </p>

            <ScrambleText />
        </section>
    );
}

export default Hero;
