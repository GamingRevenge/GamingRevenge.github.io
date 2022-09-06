import Link from "next/link";
import styles from "../styles/components/navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <Link href="/" className={styles.navbar_item}>
        Home
      </Link>
      <Link href="/mitglieder" className={styles.navbar_item}>
        Mitglieder
      </Link>
      <Link href="/" className={styles.navbar_item}>
        Gallerie
      </Link>
      <Link href="/impressum" className={styles.navbar_item}>
        Impressum
      </Link>
    </div>
  );
};

export default Navbar;
