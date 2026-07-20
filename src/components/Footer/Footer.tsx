import styles from "./Footer.module.scss";
import FooterQuote from "./FooterQuote";
import BackToTop from "./BackToTop";

export default function Footer() {
    return (
        <>
            <footer id="footer" className={styles.footer}>
                <div className="container">
                    <p className={`content ${styles.contentCTA}`}>Interested in working together? <span className="nowrap">Let's connect.</span></p>
                    <ul className={styles.footerLinks}>
                        <li className={`${styles.footerLink} ${styles.footerLinkEmail}`}><svg className={`icon ${styles.iconContact}`}><use href="/svg/icons.svg#icon-envelope"></use></svg><a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>{process.env.NEXT_PUBLIC_EMAIL}</a></li>
                        <li className={`${styles.footerLink} ${styles.footerLinkPhone}`}><svg className={`icon ${styles.iconContact}`}><use href="/svg/icons.svg#icon-mobile-phone"></use></svg><a href="tel:1-773-934-7923">(773) 934-7923</a></li>
                        <li className={`${styles.footerLink} ${styles.footerLinkMap}`}><svg className={`icon ${styles.iconContact}`}><use href="/svg/icons.svg#icon-map-pin"></use></svg>Chicago, IL</li>
                    <li className={`${styles.footerLink} ${styles.footerLinkSocial}`}><svg className={`icon ${styles.iconContact}`}><use href="/svg/icons.svg#icon-linkedin"></use></svg><a href="https://www.linkedin.com/in/stephencamper" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    </ul>

                    <p className={`content ${styles.builtWith}`}>Built with Next.js</p>
                    <p className={`content ${styles.copyright}`}>&copy; 2026 Stephen Camper</p>
                    <FooterQuote />
                </div>
            </footer>

            <BackToTop />
        </>
    )
}