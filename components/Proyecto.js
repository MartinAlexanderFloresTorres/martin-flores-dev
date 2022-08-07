import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Proyecto.module.css";
import { formatearFecha } from "../helpers";

function Proyecto({ clase, proyecto }) {
  const { imagen_previa, fecha_creacion, titulo, url, link, repositorio } =
    proyecto;

  return (
    <article
      id="proyecto"
      className={`${styles.proyecto} ${clase && styles.fondo} aparecer`}
    >
      <div className={styles.imagen}>
        <Image
          src={imagen_previa.url}
          layout="responsive"
          width={396}
          height={256}
          priority
          alt="proyecto"
        />
      </div>
      <div>
        <div className={styles.info}>
          <div className={styles.box}>
            <Link href={`/proyecto/${url}`}>
              <a id="titulo" className={styles.titulo}>
                {titulo}
              </a>
            </Link>
            <p className={styles.fecha}>{formatearFecha(fecha_creacion)}</p>
          </div>
          <div className={styles.iconos}>
            <div>
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                title="Ir al sitio"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"></path>
                </svg>
              </a>
              <a
                href={repositorio}
                target="_blank"
                rel="noreferrer"
                title="Ir al codigo fuente"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                </svg>
              </a>
              <Link href={`proyectos/${url}`}>
                <a title="Mas Información">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-file-info"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                    <path d="M11 14h1v4h1" />
                    <path d="M12 11h.01" />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
Proyecto.defaultProps = {
  clase: "",
};

export default Proyecto;
