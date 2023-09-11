import Title from "./Title.jsx";
import styles from "./Navbar.module.css";

export default function Navbar(){
    return (
        <nav className={styles.navbar}>
            <Title title="KoolGPT" />
        </nav>
    )
}