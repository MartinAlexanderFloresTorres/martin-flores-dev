import styles from "../styles/Titulo.module.css";

function Titulo({ children }) {
  return (
    <div className={styles.titulo}>
      <small className={styles.small}>{children}</small>
    </div>
  );
}

export default Titulo;
