"use client";

import { useState, useRef, useEffect } from "react";
import { projects } from "@/data/projects";
import ProjectItem from "./ProjectItem";
import styles from "./Portfolio.module.scss";

export default function Portfolio() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isFading, setIsFading] = useState(false);
    const [showToggleBtn, setShowToggleBtn] = useState(false);
    const [activeSubnav, setActiveSubnav] = useState<Record<string, string>>({});
    const [loadedBanners, setLoadedBanners] = useState<Record<string, boolean>>({});

    const portfolioRef = useRef<HTMLElement>(null);

    function handleToggle() {
        if (isExpanded) {
            setIsFading(true);
            setTimeout(() => {
                setIsExpanded(false);
                setIsFading(false);
            }, 100);

            if (portfolioRef.current) {
                const offset = 72;
                window.scrollTo({
                    top: window.scrollY + portfolioRef.current.getBoundingClientRect().top - offset, behavior: 'smooth'
                });
            }
        } else {
            setIsFading(true);
            setTimeout(() => {
                setIsExpanded(true);
                setIsFading(false);
            }, 100);
        }
    }
    
    useEffect(() => {
        function handleScrollResize() {
            if (!portfolioRef.current) return;

            // Show/hide fixed toggle button
            if (isExpanded) {
                const portfolioRect = portfolioRef.current.getBoundingClientRect();
                const halfViewport = window.innerHeight / 2;
                const visibleHeight = Math.min(portfolioRect.bottom, window.innerHeight) - Math.max(portfolioRect.top, 0);
                setShowToggleBtn(visibleHeight >= halfViewport);
            }

            // Reset expanded state on mobile resize
            if (window.innerWidth < 768 && isExpanded) {
                setIsExpanded(false);
            }
        }

        window.addEventListener('scroll', handleScrollResize);
        window.addEventListener('resize', handleScrollResize);

        return () => {
            window.removeEventListener('scroll', handleScrollResize);
            window.removeEventListener('resize', handleScrollResize);
        }
    }, [isExpanded]);

    return (
        <section id="portfolio" ref={portfolioRef} className={`section ${styles.sectionPortfolio}`}>
            <div className={isExpanded ? "container container-lg" : "container"}>
                <h2 className="title">My Work</h2>

                <hr className="divider" />

                <button 
                    id="portfolioGridToggle" 
                    className={`${styles.btnToggleGallery} ${isExpanded ? styles.expanded : ""} ${showToggleBtn ? styles.show : ""}`} 
                    aria-expanded={isExpanded}
                    onClick={handleToggle}
                >
                    {isExpanded ? "Compact View" : "Enlarge View"}
                </button>

                <div id="portfolio-grid" className={`${styles.projectGallery} ${isExpanded ? styles.expanded : ""} ${isFading ? styles.isFading : ""}`}>
                    {projects.map((project) => (
                        <ProjectItem
                            key={project.id}
                            project={project}
                            isExpanded={isExpanded}
                        />
                    ))}
                </div>

                <div className={styles.portfolioAdditional}>
                    <p className="content"><a href="https://github.com/StephenCProjects/professional-directory" target="_blank" rel="noopener">View React + TypeScript project on GitHub<svg className={`${styles.icon} ${styles.iconLinkArrow}`}><use href="/svg/icons.svg#icon-arrow-up-right"></use></svg></a></p>
                </div>
            </div>
        </section>
    )
}