import Image from "next/image";
import styles from "../styles/IconosRedes.module.css";
import Titulo from "./Titulo";

function IconosRedes() {
  return (
    <section className={`${styles.contenido} contenedor`}>
      <Titulo>Siguieme en mis redes sociales</Titulo>
      <div className={styles.iconos}>
        <a
          href="https://web.facebook.com/garena.flores.9"
          target={"_blank"}
         rel="noreferrer"
          title="facebook"
        >
          <Image
            layout="responsive"
            width={100}
            height={50}
            src="/img/facebook.svg"
            alt="facebook"
            priority
          />
        </a>
        <a
          href="https://www.instagram.com/martin_flores_28"
          target={"_blank"}
         rel="noreferrer"
          title="instagram"
        >
          <Image
            layout="responsive"
            width={100}
            height={50}
            src="/img/instagram.svg"
            alt="instagram"
            priority
          />
        </a>
        <a
          href="https://github.com/MartinAlexanderFloresTorres"
          target={"_blank"}
         rel="noreferrer"
          title="github"
        >
          <Image
            layout="responsive"
            width={100}
            height={50}
            src="/img/github.svg"
            alt="github"
            priority
          />
        </a>
        <a
          href="https://www.linkedin.com/in/martin-alexander-flores-torres-993298245/"
          target={"_blank"}
         rel="noreferrer"
          title="linkedin"
        >
          <Image
            layout="responsive"
            width={100}
            height={50}
            src="/img/linkedin.svg"
            alt="linkedin"
            priority
          />
        </a>
      </div>
    </section>
  );
}

export default IconosRedes;
