"use client";

import { useState, useEffect} from "react";
import styles from "./Footer.module.scss";

const quotes = [
    "Capes are optional; clean code is not",
    "May the CSS be with you",
    "Built for this timeline and the next",
    "Secret identity: problem solver",
    "Faster than the Millennium Falcon (on a good day)",
    "No super serum required — just clean architecture",
    "Guarding production from the dark side",
    "Next stop: production",
    "Reliable by design"
];

export default function FooterQuote() {
    const [quote, setQuote] = useState(quotes[0]);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    }, []);

    return (
        <p className={`content ${styles.footerQuote}`}>
            {quote}
       </p>
    )
}