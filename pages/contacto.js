import { useState, useRef } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import styles from "../styles/Contacto.module.css";
import Tecnologias from "../components/Tecnologias";
import Circulos from "../components/Circulos";
import emailjs from "@emailjs/browser";

function Contacto() {
  const form = useRef();

  const {
    query: { mensaje },
  } = useRouter();
  const [error, setError] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [sms, setSms] = useState(mensaje || "");
  const [exito, setExito] = useState(false);

  //=============== validar el formulario ===============//
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      Object.values({
        nombre,
        email,
        asunto,
        sms,
      }).includes("")
    ) {
      setError(true);
      setTimeout(() => {
        if (!error) {
          setError(false);
        }
      }, 2000);
      return;
    }
    //=============== envia los datos===============//
    setEnviando(true);
    await emailjs
      .sendForm(
        "service_l9tp8h2",
        "template_2frryhp",
        form.current,
        "qvDUZguEvOykHjvCD"
      )
      .then(() => setExito(true))
      .catch((error) => console.log(error.text));

    // resertear el formulario
    if (!enviando) {
      setEnviando(false);
      setNombre("");
      setEmail("");
      setAsunto("");
      setSms("");
      setTimeout(() => {
        setExito(false);
      }, 3000);
    }
  };

  return (
    <Layout pagina={"Contacto"}>
      <main className={`${styles.contacto} contenedor`}>
        <Circulos />
        <div className={styles.col}>
          <h2 className={styles.titulo}>Contáctame 🥳</h2>
          <form ref={form} className={styles.item} onSubmit={handleSubmit}>
            <legend className={styles.subEncabezado}>
              {error ? (
                <span className={styles.error}>
                  Todo los campos son obligatorios
                </span>
              ) : exito ? (
                <span className={styles.exito}>
                  Gracias 🥳 por contactarme{" "}
                </span>
              ) : (
                <span>Te brindare más información sobre mi</span>
              )}
            </legend>
            <div className={styles.campos}>
              <input
                type="text"
                value={nombre}
                name="nombre"
                onChange={(e) => setNombre(e.target.value.trimStart())}
                placeholder="Nombre"
              />
              <input
                type="email"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value.trimStart())}
                placeholder="Email"
              />
              <input
                type="text"
                value={asunto}
                name="asunto"
                onChange={(e) => setAsunto(e.target.value.trimStart())}
                placeholder="Asunto"
              />
              <textarea
                cols="30"
                rows="10"
                name="mensaje"
                placeholder="Mensaje"
                value={sms}
                onChange={(e) => setSms(e.target.value.trimStart())}
              />
              <input
                type="submit"
                value={`${enviando ? "Enviando..." : "Contactame Ahora"}`}
              />
            </div>
          </form>
        </div>

        <div className={styles.col}>
          <h2 className={styles.titulo}>Redes Sociales</h2>
          <div className={styles.item}>
            <p className={styles.subEncabezado}>
              Comunícate conmigo por medio de mis redes sociales
            </p>
            <a
              href="https://github.com/MartinAlexanderFloresTorres"
              target={"_blank"}
              rel="noreferrer"
              className={styles.link}
            >
              <i className="bx bxl-github" />
              <span>
                <span className={styles.mediante}>Mediante</span> github
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/martin-alexander-flores-torres-993298245/"
              target={"_blank"}
              rel="noreferrer"
              className={styles.link}
            >
              <i className="bx bxl-linkedin" />
              <span>
                <span className={styles.mediante}>Mediante</span> linkedin
              </span>
            </a>

            <a
              href="https://web.facebook.com/garena.flores.9"
              target={"_blank"}
              rel="noreferrer"
              className={styles.link}
            >
              <i className="bx bxl-facebook" />
              <span>
                <span className={styles.mediante}>Mediante</span> facebook
              </span>
            </a>

            <a
              href="https://www.instagram.com/martin_flores_28"
              target={"_blank"}
              rel="noreferrer"
              className={styles.link}
            >
              <i className="bx bxl-instagram" />
              <span>
                <span className={styles.mediante}>Mediante</span> instagram
              </span>
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=929254912&text=Hola Martin, Me gustaria Contratarte."
              target={"_blank"}
              rel="noreferrer"
              className={styles.link}
            >
              <i className="bx bxl-whatsapp" />
              <span>
                <span className={styles.mediante}>Mediante</span> whatsapp
              </span>
            </a>
          </div>
          <a
            href="https://github.com/MartinAlexanderFloresTorres?tab=repositories"
            target={"_blank"}
            rel="noreferrer"
            className={styles.link_dos}
          >
            Descarga recursos desde mi Repositorio
            <i className="bx bx-right-arrow-alt" />
          </a>
        </div>
      </main>
      <Tecnologias />
    </Layout>
  );
}
export default Contacto;
