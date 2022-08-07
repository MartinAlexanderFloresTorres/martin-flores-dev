import Layout from "../components/Layout";
import Presentacion from "../components/Presentacion";
import Status from "../components/Status";
import Titulo from "../components/Titulo";
import Cabezera from "../components/Cabezera";
import IntroProyectos from "../components/IntroProyectos";
import Tecnologias from "../components/Tecnologias";
import MisHabilidades from "../components/MisHabilidades";
import Extras from "../components/Extras";
import IconosRedes from "../components/IconosRedes";
import BoxContacto from "../components/BoxContacto";

function Home() {
  const proyectos_info = {
    numero: 1,
    nombre: "Proyectos",
    titulo: "Algunos de mis proyectos web",
    descripcion_uno:
      "Te mostrare los proyectos mas descatados que eh realizado a lo largo de mi carrera como programador frontend y backend en estos ultimos años.",
    descripcion_dos:
      "Te brindo sitios web creativos, de calidad, con un rendimiento satisfactorio en las aplicaciones y obteniendo un mejor performance en nuevos sitios.",
  };
  const habilidades_info = {
    numero: 2,
    nombre: "Habilidades",
    titulo: "Conoce mis habilidades",
  };
  return (
    <Layout pagina={"Inicio"}>
      <Presentacion />
      <Status />
      <main className={"banner"}>
        <section className="contenedor">
          <Titulo>Explora mis proyectos</Titulo>
          <Cabezera contenido={proyectos_info}>
            <IntroProyectos />
          </Cabezera>
        </section>
      </main>
      <Tecnologias />
      <BoxContacto />
      <section className={"contenedor"}>
        <Titulo>Expora mis habilidades</Titulo>
        <Cabezera contenido={habilidades_info}>
          <MisHabilidades />
        </Cabezera>
      </section>
      <Extras />
      <IconosRedes />
    </Layout>
  );
}

export default Home;
