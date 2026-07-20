import styles from "./About.module.scss";

export default function About() {
    return (
        <section id="about" className={styles.sectionAbout}>
            <div className="container">
                <h2 className="title">About Me</h2>

                <hr className="divider" />

                <p className="content">I build fast, accessible, and maintainable front-end experiences that help teams deliver results without technical debt.</p>

                <p className="content">With over 20 years in web development, I've helped agencies and clients create responsive, user-focused websites and interactive marketing experiences. My work emphasizes performance, usability, and clean, scalable code that teams can extend with ease.</p>

                <p className="content">I'm comfortable working within existing systems or helping teams modernize their front-end workflow using current tools and practices. Collaboration, clear communication, and reliability are central to every project I take on.</p>

                <h3 className={styles.quickFacts}>Quick Facts:</h3>

                <ul className={styles.factsOverview}>
                    <li className={`{${styles.factsItem} ${styles.factsItemExperience}`}><svg className={`icon ${styles.iconFacts}`}><use href="/svg/icons.svg#icon-clock"></use></svg>20+ years in front-end development</li>
                    <li className={`{${styles.factsItem} ${styles.factsItemStack}`}><svg className={`icon ${styles.iconFacts}`}><use href="/svg/icons.svg#icon-cog"></use></svg>HTML5, CSS3, JavaScript, WordPress, React, Sass, GSAP</li>
                    <li className={`{${styles.factsItem} ${styles.factsItemWorkstyle}`}><svg className={`icon ${styles.iconFacts}`}><use href="/svg/icons.svg#icon-globe"></use></svg>Remote/contract ready — adaptable to team or solo environments</li>
                </ul>

                <a href="#skills" className="btn">Explore My Skills</a>
            </div>
        </section>
    )
}