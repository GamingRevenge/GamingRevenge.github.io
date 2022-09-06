import Navbar from "../components/Navbar";
import styles from "../styles/pages/impressum.module.css";

const Impressum = () => {
  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Impressum der Nüsser Prachtkerle</h1>
        <p className={styles.text}>Test 2 dieser Text wird noch bearbeitet</p>
      </div>
    </>
  );
};

export default Impressum;
