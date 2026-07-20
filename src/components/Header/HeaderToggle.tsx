"use client";

import { useState, useEffect } from "react";
import styles from "./Header.module.scss";

export default function HeaderToggle() {
    const [isOpen, setIsOpen] = useState(false);
    const [brandVisible, setBrandVisible] = useState(false);
    
    function handleToggle() {
        if (isOpen) {
            setIsOpen(false);
            document.body.style.overflow = '';
        } else {
            setIsOpen(true);
            document.body.style.overflow = 'hidden';
            
            setTimeout(() => {
                const firstLink = document.querySelector('.navbar-links li a') as HTMLAnchorElement;
                firstLink?.focus();
            }, 50);
        }
    }

    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, {
            rootMargin: '-50% 0px -50% 0px'
        });

        sections.forEach(section => observer.observe(section));
        
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const navLinks = document.querySelectorAll('.navbar-links li a') as NodeListOf<HTMLAnchorElement>;
        const desktopBreakpoint = 768;

        function isDesktop() {
            return window.innerWidth >= desktopBreakpoint;
        }

        function setLinksTabbable(state: boolean) {
            navLinks.forEach(link => {
                link.tabIndex = state ? 0 : -1;
            });
        }

        function handleKeyDown(e: KeyboardEvent) {
            if (!isOpen || isDesktop()) return;

            const firstLink = navLinks[0];
            const lastLink = navLinks[navLinks.length -1];

            if (e.key === 'Escape') {
                setIsOpen(false);
                setLinksTabbable(false);
                document.getElementById('navbar-menu')?.focus();
                return;
            }

            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstLink) {
                        e.preventDefault();
                        lastLink.focus();
                    }
                } else {
                    if (document.activeElement === lastLink) {
                        e.preventDefault();
                        firstLink.focus();
                    }
                }
            }
        }

        navLinks.forEach((link, index) => {
            link.addEventListener('keydown', (e: KeyboardEvent) => {
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    const next = navLinks[index + 1] || navLinks[0];
                    next.focus();
                }

                if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    const prev = navLinks[index - 1] || navLinks[navLinks.length -1];
                    prev.focus();
                }

                if (e.key === 'Home') {
                    e.preventDefault();
                    navLinks[0].focus();
                }

                if (e.key === 'End') {
                    e.preventDefault();
                    navLinks[navLinks.length -1].focus();
                }
            });
        });

        function handleClickOutside(e: MouseEvent) {
            if (!isOpen || isDesktop()) return;

            const nav = document.getElementById('navbar-nav');
            const menu = document.getElementById('navbar-menu');

            if (!nav?.contains(e.target as Node) && !menu?.contains(e.target as Node)) {
                setIsOpen(false);
                setLinksTabbable(false);
            }
        }

        function handleResize() {
            setLinksTabbable(isDesktop());

            if (isDesktop() && isOpen) {
                setIsOpen(false);
                document.body.style.overflow = '';
            }
        }

        setLinksTabbable(isDesktop());

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('click', handleClickOutside);
        window.addEventListener('resize', handleResize);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('click', handleClickOutside);
            window.removeEventListener('resize', handleResize);
        };
    }, [isOpen]);

    useEffect(() => {
        const heroName = document.querySelector('#hero h1');
        if (!heroName) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setBrandVisible(!entry.isIntersecting);
            },
            {
                threshold: 0,
                rootMargin: '-72px 0px 0px 0px'
            }
        );

        observer.observe(heroName);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <a href="#" className={`${styles.navbarBrand} ${brandVisible ? styles.show : ''}`}>
                Stephen Camper <span className={styles.navbarBrandTitle}>&bull; Front-End Developer</span>
            </a>

            <button
                className={`${styles.navbarMenu} ${isOpen ? styles.active : ""}`}
                aria-label="Toggle navigation"
                aria-expanded={isOpen}
                aria-controls="navbar-nav"
                onClick={handleToggle}
            >
                <span></span>
                <span></span>
                <span></span>

            </button>

            <div 
                id="navbar-nav" 
                className={`${styles.navbarNav} ${isOpen ? styles.show : ""}`}
            >
                
                <ul className={styles.navbarLinks}>
                    <li><a href="#about" className={activeSection === 'about' ? styles.active : ''}>About</a></li>
                    <li><a href="#skills" className={activeSection === 'skills' ? styles.active : ''}>Expertise</a></li>
                    <li><a href="#portfolio" className={activeSection === 'portfolio' ? styles.active : ''}>Projects</a></li>
                </ul>
            </div>
        </>
    )
}