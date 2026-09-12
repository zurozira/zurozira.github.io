function Contact() {
    return (
        <section id="contact" className="contact-section">
            <h2 className="coralText">contact</h2>

            <div className="contact-wrapper">
                <img
                    src="/assets/me.jpg"
                    alt="Portrait of Vu"
                    className="contact-photo"
                />

                <div className="contact-info">
                    <p className="contact-blurb">
                        Always open to chat about projects, running trails, or
                        anything :)
                    </p>

                    <div className="contact-links">
                        <a
                            className="swipe-link"
                            href="mailto:vubuic@gmail.com"
                        >
                            <span data-text="email">email</span>
                        </a>
                        <a
                            className="swipe-link"
                            href="https://github.com/zurozira"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span data-text="gitHub">github</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
