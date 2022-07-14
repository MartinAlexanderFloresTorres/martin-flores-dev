import styles from "../styles/Extras.module.css";

function Extras() {
  return (
    <div className={styles.extras}>
      <div className={`${styles.contenido} contenedor`}>
        <div className={styles.item}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-send"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="10" y1="14" x2="21" y2="3" />
            <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
          </svg>
          <h2 className={styles.titulo}>Comunícate conmigo</h2>
          <p className={styles.parrafo}>
            Las 24 horas disponibles para poder brindarte apoyo en los
            proyectos.
          </p>
        </div>

        <div className={styles.item}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-trending-up"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="3 17 9 11 13 15 21 7" />
            <polyline points="14 7 21 7 21 14" />
          </svg>
          <h2 className={styles.titulo}>Rendimiento</h2>
          <p className={styles.parrafo}>
            Mejoro el rendimiento de la aplicación, Así mismo brindo
            confiabilidad en cada impulso.
          </p>
        </div>

        <div className={styles.item}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-users"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="9" cy="7" r="4" />
            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
          </svg>
          <h2 className={styles.titulo}>Trabajo colaborativo</h2>
          <p className={styles.parrafo}>
            Aporto ideas de solución hacia mi equipo, con la finalidad de apoyar
            y solucionar problemas.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Extras;
