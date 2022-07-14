import Layout from "../components/Layout";
import Link from "next/link";
import styles from "../styles/NotFound.module.css";

function NotFound() {
  return (
    <Layout pagina={"NotFound"}>
      <main className={`${styles.contenido} banner_4`}>
        <h1>Algo salió mal. esta pagina no existe</h1>
        <Link href={"/"}>
          <a>Regresar a casa</a>
        </Link>
      </main>
    </Layout>
  );
}
export default NotFound;
