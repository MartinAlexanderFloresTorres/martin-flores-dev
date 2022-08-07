import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children, pagina }) {
  let page = pagina.toString()

  return (
    <>
      <Head>
        <meta name="description" content="portafolio de martin flores." />
        <link rel="icon" href="/icono.ico" />
        <link rel="apple-touch-icon" href="/img/logo_morado.webp" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="black" />
        <title>{`Martín Flores | ${page}`}</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
