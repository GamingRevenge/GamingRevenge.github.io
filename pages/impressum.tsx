import Navbar from "../components/Navbar";
import styles from "../styles/pages/impressum.module.css";

const Impressum = () => {
  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          {" "}
          <em> Impressum der Nüsser Prachtkerle </em>{" "}
        </h1>
        <p className={styles.text}>
          <strong> Hierrüber können sie zu uns Kontakt Aufnehmen </strong>{" "}
        </p>
      </div>
      <div></div>
    </>
  );
};

export default Impressum;
