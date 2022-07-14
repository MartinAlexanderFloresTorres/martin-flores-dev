import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import Titulo from "../../components/Titulo";
import styles from "../../styles/InfoProyecto.module.css";
import { formatearFecha } from "../../helpers";

function InfoProyecto({ proyecto }) {
  const {
    titulo,
    resumen_uno,
    resumen_negrita,
    resumen_dos,
    imagen_previa,
    imagenes,
    tecnologias,
    link,
    fecha_creacion,
    repositorio,
    updatedAt,
  } = proyecto[0];

  let image_url = imagen_previa.formats.medium.url;

  return (
    <Layout pagina={"nombre del proyecto"}>
      <main className="contenedor">
        <Link href={"/proyectos"}>
          <a className={styles.regresar}>
            <i className="bx bx-arrow-back" />
            Volver a los proyectos
          </a>
        </Link>
        <h1 className={styles.titulo}>{titulo}</h1>
        <section className={styles.grid}>
          <div>
            <p>{resumen_uno}</p>
            <p className={styles.negrita}>{resumen_negrita}</p>
            <p>{resumen_dos}</p>
          </div>

          <div className={styles.rigth}>
            <div className={styles.imagen}>
              <Image
                layout="responsive"
                width={300}
                height={200}
                priority
                src={image_url}
                alt="fs"
              />
            </div>
            <div>
              <div className={styles.box}>
                <h2 className={styles.subTitulo}>Tecnologias actualizadas</h2>
                <div className={styles.tecnologias}>
                  {tecnologias.tecno.length > 0 ? (
                    tecnologias.tecno.map((tecnologia) => (
                      <span key={tecnologia.id}>{tecnologia.nombre}</span>
                    ))
                  ) : (
                    <>
                      <span>html</span>
                      <span>css</span>
                    </>
                  )}
                </div>
              </div>
              <div className={styles.sitio}>
                <h2>Sitio web</h2>
                <a href={link} target="_blank" rel="noopener">
                  {link.split("https://")}
                </a>
              </div>
              <div className={styles.sitio}>
                <h2>Repositorio</h2>
                <a
                  title="GitHub"
                  className={styles.repositorio}
                  href={repositorio}
                  target="_blank"
                  rel="noopener"
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
              </div>
              <div className={styles.sitio}>
                <h2>Fecha de creacion</h2>
                <p>{formatearFecha(fecha_creacion)}</p>
              </div>
              <div className={styles.sitio}>
                <h2>Ultima Actualizacion</h2>
                <p>{formatearFecha(updatedAt)}</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sglider_contenedor}>
          <Titulo>Imagenes Previas</Titulo>
          <div className={styles.sglider}>
            {imagenes.map((item) => (
              <Image
                key={item.id}
                layout="responsive"
                width={300}
                height={200}
                priority
                src={item.formats.medium.url}
                alt={"sglider"}
              />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
//=============== getServerSideProps ===============//
export async function getServerSideProps({ query: { url } }) {
  const api_url = `${process.env.API_URL}/proyectos?url=${url}`;
  const respuesta = await fetch(api_url);
  const proyecto = await respuesta.json();
  return {
    props: {
      proyecto,
    },
  };
}

export default InfoProyecto;
