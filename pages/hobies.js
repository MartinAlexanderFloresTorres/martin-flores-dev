import Layout from "../components/Layout";
import Titulo from "../components/Titulo";
import Cabezera from "../components/Cabezera";
import Extras from "../components/Extras";
import BoxContacto from "../components/BoxContacto";
import styles from "../styles/Hobies.module.css";

function Hobies() {
  const proyectos = {
    numero: "ps",
    nombre: "Mis Pasatiempos",
    titulo: "Conoce mis pasatiempos favoritos",
    descripcion_uno:
      "🤓 Conoce mis pasatiempos que realizo en mi vida diaria. En estos últimos años estar sentado todo el día programando estresa un poco, para ello realizo actividades que ayudan a despejar mi mente.",
    descripcion_dos:
      "Pasar tiempo con la familia y amigos ayuda mucho en la mentalidad de las personas, mejorando la calidad de vida y manteniéndose  saludable.",
  };

  return (
    <Layout pagina={"Hobies"}>
      <main className={`${styles.hobies} banner_3`}>
        <section className="contenedor">
          <Titulo>Pasatiempos - Hobies</Titulo>
          <Cabezera contenido={proyectos}>
            <div className={styles.pasatiempos}>
              <div className={styles.item}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-book"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                  <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                  <line x1="3" y1="6" x2="3" y2="19" />
                  <line x1="12" y1="6" x2="12" y2="19" />
                  <line x1="21" y1="6" x2="21" y2="19" />
                </svg>
                <div>
                  <h2>Leer libros</h2>
                </div>
              </div>
              <div className={styles.item}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-news"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11" />
                  <line x1="8" y1="8" x2="12" y2="8" />
                  <line x1="8" y1="12" x2="12" y2="12" />
                  <line x1="8" y1="16" x2="12" y2="16" />
                </svg>
                <div>
                  <h2>Leer noticias</h2>
                </div>
              </div>
              <div className={styles.item}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-notebook"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
                  <line x1="13" y1="8" x2="15" y2="8" />
                  <line x1="13" y1="12" x2="15" y2="12" />
                </svg>
                <div>
                  <h2>Leer historietas</h2>
                </div>
              </div>
              <div className={styles.item}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-device-tv"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="3" y="7" width="18" height="13" rx="2" />
                  <polyline points="16 3 12 7 8 3" />
                </svg>
                <div>
                  <h2>Ver televición</h2>
                </div>
              </div>
              <div className={styles.item}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-bike"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="5" cy="18" r="3" />
                  <circle cx="19" cy="18" r="3" />
                  <polyline points="12 19 12 15 9 12 14 8 16 11 19 11" />
                  <circle cx="17" cy="5" r="1" />
                </svg>
                <div>
                  <h2>Andar en bicicleta</h2>
                </div>
              </div>
              <div className={styles.item}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-steam"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M16.5 5a4.5 4.5 0 1 1 -.653 8.953l-4.347 3.009l0 .038a3 3 0 0 1 -2.824 2.995l-.176 .005a3 3 0 0 1 -2.94 -2.402l-2.56 -1.098v-3.5l3.51 1.755a2.989 2.989 0 0 1 2.834 -.635l2.727 -3.818a4.5 4.5 0 0 1 4.429 -5.302z" />
                  <circle fill="currentColor" cx="16.5" cy="9.5" r="1" />
                </svg>
                <div>
                  <h2>Jugar video juegos</h2>
                </div>
              </div>
              <div className={styles.item}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-soccer-field"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="12" r="3" />
                  <path d="M3 9h3v6h-3z" />
                  <path d="M18 9h3v6h-3z" />
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <line x1="12" y1="5" x2="12" y2="19" />
                </svg>
                <div>
                  <h2>Jugar futbol</h2>
                </div>
              </div>
              <div className={styles.item}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-music"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="6" cy="17" r="3" />
                  <circle cx="16" cy="17" r="3" />
                  <polyline points="9 17 9 4 19 4 19 17" />
                  <line x1="9" y1="8" x2="19" y2="8" />
                </svg>
                <div>
                  <h2>Escuchar musica</h2>
                </div>
              </div>
              <div className={styles.item}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-device-speaker"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="5" y="3" width="14" height="18" rx="2" />
                  <circle cx="12" cy="14" r="3" />
                  <line x1="12" y1="7" x2="12" y2="7.01" />
                </svg>
                <div>
                  <h2>Bailar</h2>
                </div>
              </div>
              <div className={styles.item}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-microphone-2"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M15.002 12.9a5 5 0 1 0 -3.902 -3.9" />
                  <path d="M15.002 12.9l-3.902 -3.899l-7.513 8.584a2 2 0 1 0 2.827 2.83l8.588 -7.515z" />
                </svg>
                <div>
                  <h2>Cantar</h2>
                </div>
              </div>
              <div className={styles.item}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-physotherapist"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 15l-1 -3l4 -2l4 1h3.5" />
                  <circle cx="4" cy="19" r="1" />
                  <circle cx="12" cy="6" r="1" />
                  <path d="M12 17v-7" />
                  <path d="M8 20h7l1 -4l4 -2" />
                  <path d="M18 20h3" />
                </svg>
                <div>
                  <h2>Realizar ejercicio</h2>
                </div>
              </div>
              <div className={styles.item}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-plane"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z" />
                </svg>
                <div>
                  <h2>Viajar</h2>
                </div>
              </div>
              <div className={styles.item}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-volume"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M15 8a5 5 0 0 1 0 8" />
                  <path d="M17.7 5a9 9 0 0 1 0 14" />
                  <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a0.8 .8 0 0 1 1.5 .5v14a0.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
                </svg>
                <div>
                  <h2>Escribir poemas</h2>
                </div>
              </div>
              <div className={styles.item}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-keyboard"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="2" y="6" width="20" height="12" rx="2" />
                  <line x1="6" y1="10" x2="6" y2="10" />
                  <line x1="10" y1="10" x2="10" y2="10" />
                  <line x1="14" y1="10" x2="14" y2="10" />
                  <line x1="18" y1="10" x2="18" y2="10" />
                  <line x1="6" y1="14" x2="6" y2="14.01" />
                  <line x1="18" y1="14" x2="18" y2="14.01" />
                  <line x1="10" y1="14" x2="14" y2="14" />
                </svg>
                <div>
                  <h2>Tocar piano</h2>
                </div>
              </div>
              <div className={styles.item}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-aerial-lift"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 5l16 -2m-8 1v10m-5.106 -6h10.306c2.45 3 2.45 9 -.2 12h-10.106c-2.544 -3 -2.544 -9 0 -12zm-1.894 6h14" />
                </svg>
                <div>
                  <h2>Tocar guitarra</h2>
                </div>
              </div>
              <div className={styles.item}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-palette"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 21a9 9 0 1 1 0 -18a9 8 0 0 1 9 8a4.5 4 0 0 1 -4.5 4h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />
                  <circle cx="7.5" cy="10.5" r=".5" fill="currentColor" />
                  <circle cx="12" cy="7.5" r=".5" fill="currentColor" />
                  <circle cx="16.5" cy="10.5" r=".5" fill="currentColor" />
                </svg>
                <div>
                  <h2>Pintar</h2>
                </div>
              </div>
              <div className={styles.item}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-wand"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="6 21 21 6 18 3 3 18 6 21" />
                  <line x1="15" y1="6" x2="18" y2="9" />
                  <path d="M9 3a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
                  <path d="M19 13a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
                </svg>
                <div>
                  <h2>Diseñar</h2>
                </div>
              </div>
            </div>
          </Cabezera>
        </section>
      </main>
      <Extras />
      <BoxContacto />
    </Layout>
  );
}
export default Hobies;
