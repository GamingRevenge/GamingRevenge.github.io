import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import styles from "../styles/pages/home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
    </div>
  );
};

export default Home;
