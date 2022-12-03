import styles from "./Navbar.module.css";
import logo from "../../Images/Fastor-logo.png";

export default function Navbar(){

    return (
        <>
        <nav className={styles.NavDiv}>
             <img src={logo} alt="" />
        </nav>
        </>
    )
}