import { motion } from "framer-motion";
import styles from "../styles/Status.module.css";

function Status() {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <section className={styles.status}>
      <div className={`${styles.contenido} contenedor`}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 1 }}
          className={styles.item}
        >
          <h2 className={styles.numero}>39+</h2>
          <h3 className={styles.texto}>Citas</h3>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 1 }}
          className={styles.item}
        >
          <h2 className={styles.numero}>3+</h2>
          <h3 className={styles.texto}>Años de Trabajo</h3>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 1 }}
          className={styles.item}
        >
          <h2 className={styles.numero}>45+</h2>
          <h3 className={styles.texto}>Proyectos Terminados</h3>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 1 }}
          className={styles.item}
        >
          <h2 className={styles.numero}>99.99%</h2>
          <h3 className={styles.texto}>Clientes Satisfechos</h3>
        </motion.div>
      </div>
    </section>
  );
}

export default Status;
