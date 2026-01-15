import Image from "next/image";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <Image src="/assets/ela.jpg" alt="Imagem" width={1000} height={600} />

      <h1 className={styles.title}>Te amo ❤️</h1>
    </div>
  );
}

export default Home;
