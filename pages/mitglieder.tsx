import Mitglied from "../components/Mitglied";
import Navbar from "../components/Navbar";
import styles from "../styles/pages/mitglieder.module.css";

const Mitglieder = () => {
  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          {" "}
          <em> Mitglieder der Nüsser Prachtkerle </em>{" "}
        </h1>
        <div className={styles.mitglieder}>
          <Mitglied
            image="/hund.png"
            name="Chris Mustermann"
            description="Chris halt nh"
          />
          <Mitglied
            image="/hund2.png"
            name="Sep Mustrmann"
            description="Sep halt nh"
          />
          <Mitglied
            image="/hund3.png"
            name="Jay Mustermann"
            description="Jay halt nh"
          />
          <Mitglied
            image="/hund4.png"
            name="Brammen Mustermann"
            description="Brammen halt nh"
          />
          <Mitglied
            image="/hund5.png"
            name="Zane Mustermann"
            description="Zane halt nh"
          />
          <Mitglied
            image="/hund6.png"
            name="Max Mustermann"
            description="Max halt nh"
          />
        </div>
      </div>
    </>
  );
};

export default Mitglieder;
