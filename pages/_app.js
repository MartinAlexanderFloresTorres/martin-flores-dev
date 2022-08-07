import { ProyectosProvider } from "../context/ProyectosProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ProyectosProvider>
      <Component {...pageProps} />
    </ProyectosProvider>
  );
}

export default MyApp;
