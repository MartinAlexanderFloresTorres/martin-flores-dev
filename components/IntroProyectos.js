import Link from "next/link";
import Proyecto from "./Proyecto";
import styles from "../styles/IntroProyectos.module.css";
import useProyectos from "../hooks/useProyectos";
import Preload from "./Preload";

function IntroProyectos() {
  const { entradaProyectos } = useProyectos();
  return (
    <>
      <div className={styles.introProyectos}>
        {entradaProyectos.length > 0 ? (
          entradaProyectos.map((proyecto) => (
            <Proyecto key={proyecto._id} proyecto={proyecto} />
          ))
        ) : (
          <>
            <Preload />
            <Preload />
            <Preload />
            <Preload />
            <Preload />
            <Preload />
          </>
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
