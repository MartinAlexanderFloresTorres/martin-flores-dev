import Link from "next/link";
import Proyecto from "./Proyecto";
import styles from "../styles/IntroProyectos.module.css";

function IntroProyectos({ proyectos }) {
  return (
    <>
      <div className={styles.introProyectos}>
        {proyectos.length > 0 ? (
          proyectos.map((proyecto) => (
            <Proyecto key={proyecto._id} proyecto={proyecto} />
          ))
        ) : (
          <div className="no_proyectos">No hay proyectos que mostrar</div>
        )}
      </div>
      <div className="contenedor_boton">
        <Link href={"/proyectos"}>
          <a className={styles.botonVerMas}>
            Ver todo los Proyectos
            <i className="bx bx-right-arrow-alt" />
          </a>
        </Link>
      </div>
    </>
  );
}

export default IntroProyectos;
