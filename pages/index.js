import Image from "next/image";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div style={styles.container}>
      <Image src="/assets/ela.jpg" alt="Imagem" width={1000} />

      <h1 style={styles.title}>Te amo ❤️</h1>
    </div>
  );
}

export default Home;
