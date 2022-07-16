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

function Home({ proyectos, data_presentacion }) {
  const proyectos_info = {
    numero: 1,
    nombre: "Proyectos",
    titulo: "Algunos de mis proyectos web",
    descripcion_uno: "Te mostrare los proyectos mas descatados que eh realizado a lo largo de mi carrera como programador frontend y backend en estos ultimos años.",
    descripcion_dos: "Te brindo sitios web creativos, de calidad, con un rendimiento satisfactorio en las aplicaciones y obteniendo un mejor performance en nuevos sitios."
  };
  const habilidades_info = {
    numero: 2,
    nombre: "Habilidades",
    titulo: "Conoce mis habilidades",
  };
  return (
    <Layout pagina={"Inicio"}>
      <Presentacion informacion={data_presentacion} />
      <Status />
      <main className={"banner"}>
        <section className="contenedor">
          <Titulo>Explora mis proyectos</Titulo>
          <Cabezera contenido={proyectos_info}>
            <IntroProyectos proyectos={proyectos} />
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
//=============== contruye la pagina en cada request ===============//
export async function getServerSideProps() {
  try {
    const [res_proyectos, res_introducion] = await Promise.all([
      fetch(`${process.env.API_URL}/proyectos?_limit=6`),
      fetch(`${process.env.API_URL}/presentacion`),
    ]);
    const [data_proyectos, data_presentacion] = await Promise.all([
      res_proyectos.json(),
      res_introducion.json(),
    ]);

    const proyectos = data_proyectos.map((proyecto) => {
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
      props: { proyectos, data_presentacion },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { proyectos: [], data_presentacion: {} },
    };
  }
}
export default Home;
