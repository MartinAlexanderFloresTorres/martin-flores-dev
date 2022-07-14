import { useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Proyectos.module.css";
import Proyecto from "../components/Proyecto";
import IconosRedes from "../components/iconosRedes";
import BoxContacto from "../components/BoxContacto";

function Proyectos({ proyectos }) {
  const [busqueda, setBusquedad] = useState("");
  const [error, setError] = useState(false);

  //=============== FILTRAR PROYECTOS ===============//
  const filtrar = (e) => {
    setBusquedad(e.target.value);
    // selectores
    const divProyecto = document.querySelectorAll("#proyecto");
    const valor = e.target.value.toLowerCase();
    // verificacion
    divProyecto.forEach((chat) => {
      // texto busqueda
      let name = chat.querySelector("#titulo").textContent.toLocaleLowerCase();

      // filtrar
      if (name.indexOf(valor) != -1) {
        chat.classList.remove("ocultar");
        chat.classList.add("aparecer");
      } else {
        chat.classList.remove("aparecer");
        chat.classList.add("ocultar");
      }
      // mostrar mensaje
      if (chat.classList.contains("ocultar")) {
        setError(true);
      } else {
        setError(false);
      }
    });
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
            proyectos.map((proyecto) => (
              <Proyecto key={proyecto._id} proyecto={proyecto} />
            ))
          ) : (
            <div className="no_proyectos">No hay proyectos que mostrar</div>
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

//=============== contruye la pagina en cada request ===============//
export async function getServerSideProps() {
  try {
    const res = await fetch(`${process.env.API_URL}/proyectos`);
    const data = await res.json();

    const proyectos = data.map((proyecto) => {
      const {
        imagen_previa,
        fecha_creacion,
        titulo,
        url,
        repositorio,
        link,
        _id,
      } = proyecto;
      const objeto = {
        imagen_previa,
        fecha_creacion,
        titulo,
        url,
        _id,
        link,
        repositorio,
      };
      return objeto;
    });
    return {
      props: { proyectos },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { proyectos: [] },
    };
  }
}

export default Proyectos;
