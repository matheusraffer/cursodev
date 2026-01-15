import Image from "next/image";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <Image src="/assets/ela.jpg" alt="Imagem" />

      <h1 className={styles.title}>Te amo ❤️</h1>

      <p style={{ fontWeight: "bold" }}>
        Te amo demais, meu amor. Sei que às vezes tenho dificuldade em me
        expressar, mas isso acontece porque sempre quis demonstrar o que sinto
        da forma mais especial possível — não com algo simples ou genérico que
        se encontra em qualquer TikTok ou Instagram da vida. <br /> <br /> Por
        isso, decidi criar este domínio. E, ao registrá-lo, é como se eu
        estivesse modificando a própria internet: milhares de servidores
        espalhados pelo mundo inteiro apontam para este site, um único lugar
        onde eu provo, de todas as formas possíveis, o meu amor por você..{" "}
      </p>
    </div>
  );
}

export default Home;
