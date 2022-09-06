import Mitglied from "../components/Mitglied";
import Navbar from "../components/Navbar";
import styles from "../styles/pages/mitglieder.module.css";

const Mitglieder = () => {
  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Mitglieder der Nüsser Prachtkerle</h1>
        <div className={styles.mitglieder}>
          <Mitglied
            image="/hund.png"
            name="Peter Smitz"
            description="Der Hund"
          />
          <Mitglied
            image="/favicon.ico"
            name="Peter Smitz"
            description="Pedda halt nh"
          />
          <Mitglied
            image="/favicon.ico"
            name="Peter Smitz"
            description="Pedda halt nh"
          />
          <Mitglied
            image="/favicon.ico"
            name="Peter Smitz"
            description="Pedda halt nh"
          />
          <Mitglied
            image="/favicon.ico"
            name="Peter Smitz"
            description="Pedda halt nh"
          />
          <Mitglied
            image="/favicon.ico"
            name="Peter Smitz"
            description="Pedda halt nh"
          />
        </div>
      </div>
    </>
  );
};

export default Mitglieder;
