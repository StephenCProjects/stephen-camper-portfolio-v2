import styles from "./Header.module.scss";
import HeaderToggle from "./HeaderToggle";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className="container">
                <nav className={styles.navbar}>


                    <HeaderToggle />
                </nav>
            </div>
        </header>
    )
}