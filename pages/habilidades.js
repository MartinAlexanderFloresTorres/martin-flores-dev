import Layout from "../components/Layout";
import MisHabilidades from "../components/MisHabilidades";
import Cabezera from "../components/Cabezera";
import Titulo from "../components/Titulo";
import IconosRedes from "../components/IconosRedes";
import BoxContacto from "../components/BoxContacto";

function Habilidades() {
  const habilidades = {
    numero: 1,
    nombre: "Mis Habilidades",
    titulo: "Conoce mis habilidades",
  };
  return (
    <Layout pagina={"Habilidades"}>
      <main className="banner_2">
        <section className="contenedor">
          <Titulo>La tecnología no para</Titulo>
          <Cabezera contenido={habilidades} />
          <MisHabilidades />
        </section>
      </main>
      <IconosRedes />
      <BoxContacto />
    </Layout>
  );
}
export default Habilidades;
