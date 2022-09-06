import styles from "../styles/components/navbar.module.css";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar_item}>
        <NavbarItem href="/">Home</NavbarItem>
      </div>
      <div className={styles.navbar_item}>
        <NavbarItem href="/mitglieder">Mitglieder</NavbarItem>
      </div>
      <div className={styles.navbar_item}>
        <NavbarItem href="/gallerie">Gallerie</NavbarItem>
      </div>
      <div className={styles.navbar_item}>
        <NavbarItem href="/impressum">Impressum</NavbarItem>
      </div>
    </div>
  );
};

export default Navbar;
