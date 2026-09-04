const projects = [
    {
        name: "zuroWa",
        description:
            "Portfolio web app platform built with ASP.NET Core, C#, Razor, and SQLite — hosts several smaller apps below.",
        githubUrl: "https://github.com/zurozira/zuroWa",
        liveUrl: "https://zurowa.cong-vu.com",
        subProjects: [
            {
                name: "ZicZacZu",
                description:
                    "A PvP turn-based tic-tac-toe game with vanilla HTML/CSS frontend.",
                liveUrl: "https://zurowa.cong-vu.com/ZicZacZu",
            },
            {
                name: "EyeMax",
                description: "A movie search application using TMDB.",
                liveUrl: "https://zurowa.cong-vu.com/EyeMax/Search",
            },
            {
                name: "Ponsai",
                description: "A simple habit tracking application.",
                liveUrl: "https://zurowa.cong-vu.com/Ponsai",
            },
        ],
    },
    {
        name: "fcitx5-osd",
        description:
            "Animated on-screen display for fcitx5 input method switches (Linux). C++ backend and C#/Avalonia frontend.",
        githubUrl: "https://github.com/zurozira/fcitx5-osd",
        liveUrl: null,
        subProjects: [],
    },
];

function Projects() {
    return (
        <section id="projects" className="projects-section">
            <h2 className="coralText">projects</h2>

            <div className="project-grid">
                {projects.map((project) => (
                    <article className="project-card" key={project.name}>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>

                        <div className="project-links">
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Live →
                                </a>
                            )}
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    GitHub →
                                </a>
                            )}
                        </div>

                        {project.subProjects.length > 0 && (
                            <div className="sub-project-list">
                                <p className="sub-project-label">
                                    Apps hosted within zuroWa:
                                </p>

                                {project.subProjects.map((sub) => (
                                    <a
                                        className="sub-project-item"
                                        href={sub.liveUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        key={sub.name}
                                    >
                                        <span className="sub-project-name">
                                            {sub.name} →
                                        </span>
                                        <span className="sub-project-description">
                                            {sub.description}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        )}
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Projects;
