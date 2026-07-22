import styles from "./Skills.module.scss";

export default function Skills() {
    return (
        <section id="skills" className={`section ${styles.sectionSkills}`}>
            <div className="container">
                <h2 className="title">Core Skills and Abilities</h2>

                <hr className="divider" />

                <p className="content">I focus on modern, responsive, and maintainable front-end development built for performance and scalability.</p>
                
                <div className={styles.skillsOverview}>
                    <div className={styles.skillsItem}>
                        <svg className={`icon ${styles.iconSkills} ${styles.iconSkillsFrameworks}`}><use href="/svg/icons.svg#icon-code"></use></svg>
                        <h3>Front-End &amp; Frameworks </h3>
                        <ul>
                            <li>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                {/* </ul>
                            </li>
                            <li>
                                <ul> */}
                                    <li>Sass</li>
                                    <li>GSAP</li>
                                {/* </ul>
                            </li>
                            <li>
                                <ul> */}
                                    <li>React JS</li>
                                    <li>TypeScript</li>
                                    <li>Next.js</li>
                                    <li>jQuery</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.skillsItem}>
                        <svg className={`icon ${styles.iconSkills} ${styles.iconSkillsCMS}`}><use href="/svg/icons.svg#icon-database"></use></svg>
                        <h3>CMS &amp; Platforms</h3>
                        <ul>
                            <li>
                                <ul>
                                    <li>WordPress</li>
                                    <li>Sitecore</li>
                                {/* </ul>
                            </li>
                            <li>
                                <ul> */}
                                    <li>Custom CMS</li>
                                    <li>Visual Studio</li>
                                    <li>ACF</li>
                                    <li>Custom Themes</li>
                                </ul>
                                <h4>Enterprise CMS</h4>
                                <ul>
                                    <li>Veeva Vault</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.skillsItem}>
                        <svg className={`icon ${styles.iconSkills} ${styles.iconSkillsDesign}`}><use href="/svg/icons.svg#icon-pen-tool"></use></svg>
                        <h3>Design & Graphics</h3>
                        <ul>
                            <li>
                                <ul>
                                    <li>Illustration</li>
                                    <li>Layout</li>
                                {/* </ul>
                            </li>
                            <li>
                                <ul> */}
                                    <li>Figma</li>
                                    <li>Photoshop</li>
                                    <li>Adobe XD</li>
                                    <li>Sketch</li>
                                    <li>Illustrator</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.skillsItem}>
                        <svg className={`icon ${styles.iconSkills} ${styles.iconSkillsTools}`}><use href="/svg/icons.svg#icon-chart-bar"></use></svg>
                        <h3>Performance &amp; Tools </h3>
                        <ul>
                            <li>
                                <ul>
                                    <li>Analytics</li>
                                    <li>SEO</li>
                                    <li>Web Performance</li>
                                {/* </ul>
                            </li>
                            <li>
                                <ul> */}
                                    <li>Build Tools</li>
                                    <li>Vercel</li>
                                </ul>
                                <h4>Workflow &amp; Collaboration</h4>
                                <ul>
                                    <li>Workfront</li>
                                    <li>Sourcetree</li>
                                    <li>Jira</li>
                                    <li>Git</li>
                                    <li>Asana</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                <a href="#portfolio" className="btn">Explore My Work</a>
            </div>
        </section>
    )
}