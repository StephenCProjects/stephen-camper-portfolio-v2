"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { Project } from "@/data/projects";
import styles from "./Portfolio.module.scss";

interface ProjectItemProps {
    project: Project;
    isExpanded: boolean;
}

export default function ProjectItem({ project, isExpanded }: ProjectItemProps) {
    const [activeSubnavId, setActiveSubnavId] = useState(
        project.subnav && project.subnav.length > 0 ? project.subnav[0].id : null
    )
    const [bannerSrc, setBannerSrc] = useState<string | null>(null);
    const [isBannerLoaded, setIsBannerLoaded] = useState(false);
    const [currentImageSrc, setCurrentImageSrc] = useState(project.thumbnail);
    const [currentView, setCurrentView] = useState(
        project.subnav && project.subnav.length > 0 ? project.subnav[0].view || null : null
    )
    const bannerTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const emailMediaRef = useRef<HTMLDivElement>(null);

    const activeSubnav = project.subnav?.find(s => s.id === activeSubnavId);

    function handleSubnavClick(e: React.MouseEvent, subnavId: string) {
        e.preventDefault();

        const item = project.subnav?.find(s => s.id === subnavId);
        if (!item) return;

        setActiveSubnavId(subnavId);

        if (project.type === "banner") {
            if (bannerTimerRef.current) {
                clearTimeout(bannerTimerRef.current);
            }
            setBannerSrc(item.src);
            setIsBannerLoaded(true);

            bannerTimerRef.current = setTimeout(() => {
                setBannerSrc(null);
                setIsBannerLoaded(false);
            }, 20000);
        } else if (project.type === "email") {
            setCurrentImageSrc(item.src);
            setCurrentView(item.view || null);
            if (emailMediaRef.current) {
                emailMediaRef.current.scrollTop = 0;
            }

        } else if (project.type === "iva") {
            setCurrentImageSrc(item.src);
        }
    }

    const typeClass = {
        website: styles.projectWebsite,
        iva: styles.projectIva,
        banner: styles.projectBanner,
        email: styles.projectEmail
    }[project.type] || '';

    return (
        <div className={`${styles.project} ${typeClass} ${project.type === 'banner' && isBannerLoaded ? styles.bannerLoaded : ''}`}>

            {/* Media */}
            <div className={`${styles.projectMedia} ${project.type === 'email' ? styles.emailMedia : ''} ${project.type === 'iva' ? styles.ivaMedia : ''} ${project.type === 'banner' ? styles.bannerMedia : ''}`}
                ref={project.type === 'email' ? emailMediaRef : null}
            >
                <div className={`${styles.projectMediaInner} ${project.type === 'banner' ? styles.bannerPreview : ''} ${project.type === 'email' ? (currentView || '') : ''}`}>
                
                    {project.type === 'banner' ? (
                        <>
                            <img
                                src={project.thumbnail}
                                alt={project.thumbnailAlt}
                                width={600}
                                height={500}
                                loading="lazy"
                            />
                            {bannerSrc && (
                                <div className={styles.bannerHtmlContainer}>
                                    <iframe
                                        src={bannerSrc}
                                        className={styles.bannerIframe}
                                        scrolling="no"
                                        frameBorder="0"
                                        loading="lazy"
                                        title={`Banner ad: ${project.titleShort}`}
                                    />
                                </div>
                            )}
                        </>
                    ) : (
                        <img
                            src={currentImageSrc}
                            alt={project.thumbnailAlt}
                            width={project.type === 'email' ? 600 : 1600}
                            height={project.type === 'email' ? 500 : 900}
                            loading="lazy"
                        />
                    )}
                </div>
            </div>

            {/* Content */}
            <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>
                    <span className={styles.projectTitleShort} aria-hidden={isExpanded}>
                        {project.titleShort}
                    </span>
                    <span className={styles.projectTitleLong} aria-hidden={!isExpanded}>
                        {project.titleLong}
                    </span>
                </h3>

                <p className={`${styles.projectDesc} ${styles.projectDescShort}`} aria-hidden={isExpanded}>
                    {project.descShort}
                </p>

                {project.descLong.map((para, index) => (
                    <p key={index} className={`${styles.projectDesc} ${styles.projectDescLong}`} aria-hidden={!isExpanded}>
                        {para}
                    </p>
                ))}

                <p className={styles.projectStack}>
                    <span className={styles.projectStackShort} aria-hidden={isExpanded}>
                        {project.stackShort.map((item, index) => (
                            <span key={index}>
                                {item}{index < project.stackShort.length - 1 && <span className="stackSep"> / </span>} 
                            </span>
                        ))}
                    </span>
                    <span className={styles.projectStackLong} aria-hidden={!isExpanded}>
                        {project.stackShort.map((item, index) => (
                            <span key={index}>
                                {item}{index < project.stackLong.length - 1 && <span className="stackSep"> / </span>} 
                            </span>
                        ))}
                    </span>
                </p>

                {/* Links - only visible when expanded */}
                {isExpanded && (
                    <ul className={styles.projectLinks}>
                        {project.liveUrl && (
                            <li className={styles.projectLinkItem}>
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                    View Live Site
                                    <svg className="icon iconLinkArrow">
                                        <use href="/svg/icons.svg#icon-arrow-up-right"></use>
                                    </svg>
                                </a>
                            </li>
                        )}
                        {project.subnav?.map((item) => (
                            <li key={item.id}>
                                <a
                                    href="#"
                                    className={activeSubnavId === item.id ? styles.active : ''} onClick={(e) => handleSubnavClick(e, item.id)}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}