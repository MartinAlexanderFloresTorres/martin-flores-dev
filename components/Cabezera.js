import styles from "../styles/Cabezera.module.css";

function Cabezera({ children, contenido }) {
  const { numero, nombre, titulo } = contenido;
  return (
    <section
      className={`
      ${styles.cabezera}
      ${numero == 1 && styles.uno} 
      ${numero == 2 && styles.dos}
      ${numero == 3 && styles.tres}
      ${numero !== 1 && numero != 2 && numero && 3 && styles.cuatro}
      `}
    >
      <span className={styles.linea}></span>
      <div className={styles.box}>
        <span className={styles.number}>{numero}</span>
        <h3 className={styles.sub_titulo}>{nombre}</h3>
      </div>
      <h4 className={styles.titulo}>{titulo}</h4>
      {contenido.descripcion_uno && contenido.descripcion_dos && (
        <div className={styles.informacion}>
          <p>{contenido.descripcion_uno}</p>
          <p>{contenido.descripcion_dos}</p>
        </div>
      )}
      <div className={styles.contenido}>{children}</div>
    </section>
  );
}

export default Cabezera;
