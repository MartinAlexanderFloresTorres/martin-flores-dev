import Link from "next/link";
import styles from "../styles/BoxContacto.module.css";

function BoxContacto() {
  return (
    <section className={styles.boxContacto}>
      <div className="contenedor">
        <div className={styles.box}>
          <div>
            <h2 className={styles.titulo}>Comunícate conmigo</h2>
            <p>
              Me sentiria orgulloso de poder trabajar, brindatandote software de
              calidad.
            </p>
          </div>
          <div className={styles.botones}>
            <Link href={"/contacto"}>
              <a className={styles.btnContact}>Contáctame Ahora</a>
            </Link>
            <a className={styles.btnContact}  href="tel:+51929254912">
              Llamar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BoxContacto;
