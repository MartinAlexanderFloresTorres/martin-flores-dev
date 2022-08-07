import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/Presentacion.module.css";
import Circulos from "./Circulos";
import { motion } from "framer-motion";

function Presentacion() {
  const [mostrar, setMostrar] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const { push } = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mensaje.trim() == "") {
      e.target.classList.add("error");
      setTimeout(() => {
        e.target.classList.remove("error");
      }, 1200);
      return;
    }
    push(`/contacto?mensaje=${mensaje}`);
  };

  return (
    <section className={styles.presentacion}>
      <Circulos />

      <div className={`${styles.boxHello} contenedor`}>
        <div className={styles.box}>
          <motion.div
            animate={{ x: [-150, 50, 0] }}
            transition={{ duration: 1 }}
            className={styles.hello}
          >
            <h3>👋</h3>
            <div>
              <p>Hola, mi nombre es</p>
              <h2>MARTIN ALEXANDER FLORES TORRES</h2>
            </div>
          </motion.div>

          <motion.div
            animate={{ x: [-150, 50, 0] }}
            transition={{ duration: 1 }}
            className={styles.myCargo}
          >
            <p>SOFTWARE DEVELOPER FREELANCER</p>
          </motion.div>

          <motion.div
            animate={{ y: [-150, 50, 0] }}
            transition={{ duration: 1 }}
            className={styles.imagen}
          >
            {<Image
                layout="responsive"
                width={100}
                height={100}
                priority
                src={"/img/imagen_usuario.png"}
                alt="usuario"
              />}
          </motion.div>
        </div>

        <motion.div
          animate={{ x: [-150, 50, 0] }}
          transition={{ duration: 1 }}
          className={styles.descripcion_box}
        >
          <p>
            estudiante de desarrollo web full stack, con gran interés en acceder
            al mercado laboral para poner en práctica mis conocimientos. soy una
            persona trabajadora, comunicativa y comprometida. desearía encontrar
            una oportunidad para adquirir más experiencia profesional.
          </p>
        </motion.div>

        <motion.div
          animate={{ x: [-150, 50, 0] }}
          transition={{ duration: 1 }}
          className={styles.contactar}
        >
          <div className={styles.iconos_contenido}>
            <button title="Contacto" onClick={() => setMostrar(!mostrar)}>
              <i className="bx bx-dots-horizontal-rounded" />
            </button>
            <div
              className={`${mostrar ? styles.mostrar : styles.ocultar} ${
                styles.iconos
              }`}
            >
              <a href="#" title="whatsapp">
                <i className="bx bxl-whatsapp" />
              </a>
              <a href="#" title="facebook">
                <i className="bx bxl-facebook" />
              </a>
              <a href="#" title="instagram">
                <i className="bx bxl-instagram" />
              </a>
              <a href="#" title="github">
                <i className="bx bxl-github" />
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Contácteme ahora"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
            />
            <button type="submit" className={styles.send} title="Enviar">
              <i className="bx bxs-send" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Presentacion;
