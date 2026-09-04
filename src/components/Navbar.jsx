import { useEffect, useState } from "react";

const links = [
    { label: "projects", href: "#projects" },
    { label: "my_blog", href: "#blog" },
    { label: "contact", href: "#contact" },
];

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [hasScrolled, setHasScrolled] = useState(false);

    function toggleMenu() {
        setIsMenuOpen((previousValue) => !previousValue);
    }

    function closeMenu() {
        setIsMenuOpen(false);
    }

    useEffect(() => {
        function handleScroll() {
            setHasScrolled(window.scrollY > 16);
        }

        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`navbar-blur ${hasScrolled ? "scrolled" : ""}`}>
            <nav className="navbar">
                <a className="navbar-brand" href="#top" onClick={closeMenu}>
                    cong<span className="coralText">.</span>vu
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleMenu}
                    aria-expanded={isMenuOpen}
                    aria-controls="primary-navigation"
                    aria-label="Toggle navigation menu"
                >
                    <span aria-hidden="true">☰</span>
                </button>

                <div
                    className={`navbar-links ${isMenuOpen ? "is-open" : ""}`}
                    id="primary-navigation"
                >
                    {links.map((link) => (
                        <a
                            className="swipe-link"
                            href={link.href}
                            key={link.label}
                            onClick={closeMenu}
                        >
                            <span data-text={link.label}>{link.label}</span>
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
