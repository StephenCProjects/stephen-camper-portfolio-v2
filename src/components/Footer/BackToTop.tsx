"use client";

import { useState, useEffect } from "react";
import styles from "./BackToTop.module.scss";

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        function handleScroll() {
            setIsVisible(window.scrollY > 300);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <a
            href="#top"
            className={`${styles.btnBackToTop} ${isVisible ? styles.show : ""}`}
            role="button"
            aria-label="Back to Top"
            >
            ↑
        </a>
        
    );
}