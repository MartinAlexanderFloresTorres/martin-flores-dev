import Image from "next/image"
import styles from "../styles/Habilidades.module.css";

function MisHabilidades() {
  return (
    <section className={styles.habilidades}>
      <div className={styles.cabezera}>
        <div className={styles.titulo_top}>
          <h2>FrontEnd</h2>
          <p>
            En el lado del FrontEnd eh desarrollado múltiples habilidades de diseño para
            brindar una mejor experiencia de usuario, Aprendido
            muchas formas de solucionar problemas de la vida diaria.
          </p>
        </div>
        <div className={styles.contenido}>
          <h2 className={styles.titulo}>
            Tecnologias del lado del <span>FrontEnd</span>
          </h2>
          <div className={styles.grid}>
            <div className={styles.item}>
              <Image height={42} priority width={42} src="/img/html.webp" alt="html" />
              <h2 className={styles.tecnologia}>html 5</h2>
            </div>
            <div className={styles.item}>
              <Image height={42} priority width={42} src="/img/css.webp" alt="css" />
              <h2 className={styles.tecnologia}>css 3</h2>
            </div>
            <div className={styles.item}>
              <Image height={42} priority width={42} src="/img/javascript.webp" alt="Javascript" />
              <h2 className={styles.tecnologia}>Javascript</h2>
            </div>
            <div className={styles.item}>
              <Image height={42} priority width={42} src="/img/react.webp" alt="react" />
              <h2 className={styles.tecnologia}>React.js</h2>
            </div>
            <div className={styles.item}>
              <Image height={42} priority width={42} src="/img/redux.webp" alt="redux" />
              <h2 className={styles.tecnologia}>redux</h2>
            </div>
            <div className={styles.item}>
              <Image height={42} priority width={42} src="/img/next.webp" alt="next" />
              <h2 className={styles.tecnologia}>Next.js</h2>
            </div>
            <div className={styles.item}>
              <Image height={42} priority width={42} src="/img/api.webp" alt="api" />
              <h2 className={styles.tecnologia}>apis</h2>
            </div>
            <div className={styles.item}>
              <Image height={42} priority width={42} src="/img/terminal.webp" alt="terminal" />
              <h2 className={styles.tecnologia}>terminal</h2>
            </div>

            <div className={styles.item}>
              <Image height={42} priority width={42} src="/img/tailwindcss.svg" alt="tailwindcss" />
              <h2 className={styles.tecnologia}>tailwindcss</h2>
            </div>

            <div className={styles.item}>
              <Image height={42} priority width={42} src="/img/bootstrap.webp" alt="bootstrap" />
              <h2 className={styles.tecnologia}>bootstrap</h2>
            </div>

            <div className={styles.item}>
              <Image height={42} priority width={42} src="/img/mui.webp" alt="mui" />
              <h2 className={styles.tecnologia}>mui</h2>
            </div>

            <div className={styles.item}>
              <Image height={42} priority width={42} src="/img/git.webp" alt="git" />
              <h2 className={styles.tecnologia}>git</h2>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.cabezera}>
        <div className={styles.titulo_top}>
          <h2>BackEnd</h2>
          <p>
            En el lado del BackEnd mejoramos la calidad del proyecto, con
            múltiples mejoras y rendimiento para que nuestra aplicación sea
            segura, rápida así mismo asumiendo nuevos retos.
          </p>
        </div>
        <div className={styles.contenido}>
          <h2 className={styles.titulo}>
            Tecnologias del lado del <span>BackEnd</span>
          </h2>
          <div className={styles.grid}>
            <div className={styles.item}>
              <Image height={42} priority width={42} src="/img/node.webp" alt="node" />
              <h2 className={styles.tecnologia}>node.js</h2>
            </div>

            <div className={styles.item}>
              <Image height={42} priority width={42} src="/img/express.webp" alt="express" />
              <h2 className={styles.tecnologia}>express.js</h2>
            </div>

            <div className={styles.item}>
              <Image height={42} priority width={42} src="/img/vite.svg" alt="vite" />
              <h2 className={styles.tecnologia}>vite.js</h2>
            </div>

            <div className={styles.item}>
              <Image height={42} priority width={42} src="/img/strapi-2.svg" alt="vite" />
              <h2 className={styles.tecnologia}>strapi</h2>
            </div>

            <div className={styles.item}>
              <Image height={42} priority width={42} src="/img/php.webp" alt="php" />
              <h2 className={styles.tecnologia}>php</h2>
            </div>

            <div className={styles.item}>
              <Image height={42} priority width={42} src="/img/mysql.webp" alt="mysql" />
              <h2 className={styles.tecnologia}>mysql</h2>
            </div>

            <div className={styles.item}>
              <Image height={42} priority width={42} src="/img/mongodb.webp" alt="mongodb" />
              <h2 className={styles.tecnologia}>mongodb</h2>
            </div>

            <div className={styles.item}>
              <Image height={42} priority width={42} src="/img/aws.webp" alt="aws" />
              <h2 className={styles.tecnologia}>aws</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MisHabilidades;
