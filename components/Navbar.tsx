import Link from "next/link";
import styles from "../styles/components/navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <Link href="/" className={styles.navbar_item}>
        <p className={styles.navbar_item}>Home</p>
      </Link>
      <Link href="/mitglieder" className={styles.navbar_item}>
        <p className={styles.navbar_item}>Mitglieder</p>
      </Link>
      <Link href="/" className={styles.navbar_item}>
        <p className={styles.navbar_item}>Gallerie</p>
      </Link>
      <Link href="/impressum" className={styles.navbar_item}>
        <p className={styles.navbar_item}>Impressum</p>
      </Link>
    </div>
  );
};

export default Navbar;
