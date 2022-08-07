import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Proyectos.module.css";
import Proyecto from "../components/Proyecto";
import IconosRedes from "../components/IconosRedes";
import BoxContacto from "../components/BoxContacto";
import useProyectos from "../hooks/useProyectos";
import Preload from "../components/Preload";

function Proyectos() {
  const [busqueda, setBusquedad] = useState("");
  const [Losproyectos, setLosProyectos] = useState([]);
  const [error, setError] = useState(false);
  const { proyectos } = useProyectos();

  useEffect(() => {
    setLosProyectos(proyectos);
  }, [proyectos]);

  //=============== FILTRAR PROYECTOS ===============//
  const filtrar = (e) => {
    if (proyectos.length > 0) {
      setBusquedad(e.target.value);
      const proyectosEncontrados = proyectos.filter((proyecto) =>
        proyecto.titulo
          .toLocaleLowerCase()
          .includes(e.target.value.toLocaleLowerCase())
      );
      if (proyectosEncontrados.length === 0) {
        setError(true);
      } else {
        setError(false);
      }
      setLosProyectos(proyectosEncontrados);
    }
  };

  return (
    <Layout pagina={"Proyectos"}>
      <section className={styles.top}>
        <div className={`${styles.cabezera} contenedor`}>
          <div>
            <h1 className={styles.titulo}>Proyectos</h1>
            <p className={styles.parrafo}>
              Te mostrare todos mis proyectos que eh realizado.
            </p>
          </div>
          <div className={styles.fomulario}>
            <i className="bx bx-search" />
            <input
              value={busqueda}
              onChange={(e) => filtrar(e)}
              type="search"
              placeholder="Buscar Proyecto"
            />
          </div>
        </div>
      </section>
      <main className={styles.contenedor}>
        <section className={`${styles.grid} contenedor`}>
          {proyectos.length > 0 ? (
            Losproyectos.map((proyecto) => (
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
          {error && (
            <div className="no_proyectos">No se encontraron resultados</div>
          )}
        </section>
      </main>
      <IconosRedes />
      <BoxContacto />
    </Layout>
  );
}

export default Proyectos;
