import Image from "next/image";
import styles from "../styles/components/mitglied.module.css";

type Props = {
  image: string;
  name: string;
  description: string;
};

const Mitglied = ({ image, name, description }: Props) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <Image width={140} height={180} src={image} />
        </div>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </>
  );
};

export default Mitglied;
