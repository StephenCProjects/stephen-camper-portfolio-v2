import styles from "./Hero.module.scss";

export default function Hero() {
    return (
        <section id="hero" className={styles.sectionHero} role="banner">
            <div className="container">
                <h1>Stephen Camper</h1>
                <h2 className="title">Front-End Web Developer <span className={`nowrap ${styles.location}`}>&mdash; Chicago, IL</span></h2>

                <hr className="divider" />

                <p className="content">I build fast, accessible interfaces that feel effortless to use</p>

                <a href="#portfolio" className="btn">View My Projects</a>
            </div>
        </section>
    )
}