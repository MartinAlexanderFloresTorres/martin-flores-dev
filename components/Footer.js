import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Footer.module.css";
function Footer() {
  const [despegable, setDespegable] = useState(false);
  const [tema, setTema] = useState("oscuro");

  useEffect(() => {
    let getThema = localStorage.getItem("tema-v1");
    if (getThema == "claro") {
      setTema(getThema);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tema-v1", tema);
    const html = document.querySelector("html");
    if (tema == "oscuro") {
      html.classList.remove("claro");
      html.classList.add("oscuro");
    } else {
      html.classList.add("claro");
      html.classList.remove("oscuro");
    }
  }, [tema]);

  const despeglar = (e) => {
    e.target.parentElement.classList.toggle("active");
    setDespegable(!despegable);
  };
  return (
    <footer className={styles.footer}>
      <section className="contenedor">
        <div className={styles.contenido}>
          <div className={styles.top}>
            <h2 className={styles.logo}>
              <i className="bx bx-briefcase" />
              <span> Martin</span>
            </h2>

            <ul className={styles.item}>
              <li className={styles.despegable} onClick={(e) => despeglar(e)}>
                <h2 className={styles.titulo}>Frameworks</h2>
                <div className="iconos-despegables">
                  <i className="bx bx-minus menos" />
                  <i className="bx bx-plus mas" />
                </div>
              </li>
              <li>
                <a
                  className={styles.link}
                  href="https://nextjs.org/"
                  target={"_blank"}
                rel="noreferrer"
                >
                  Next.js
                </a>
              </li>
              <li>
                <a
                  className={styles.link}
                  href="https://vitejs.dev/"
                  target={"_blank"}
                rel="noreferrer"
                >
                  Vite.js
                </a>
              </li>
              <li>
                <a
                  className={styles.link}
                  href="https://create-react-app.dev/"
                  target={"_blank"}
                rel="noreferrer"
                >
                  Create React App
                </a>
              </li>
              <li>
                <a
                  className={styles.link}
                  href="https://nodejs.org/"
                  target={"_blank"}
                rel="noreferrer"
                >
                  Node.js
                </a>
              </li>
              <li>
                <Link href={"/habilidades"}>
                  <a className={styles.link}>Mas Frameworks</a>
                </Link>
              </li>
            </ul>
            <ul className={styles.item}>
              <li className={styles.despegable} onClick={(e) => despeglar(e)}>
                <h2 className={styles.titulo}>Librerias</h2>
                <div className="iconos-despegables">
                  <i className="bx bx-minus menos" />
                  <i className="bx bx-plus mas" />
                </div>
              </li>
              <li>
                <a
                  className={styles.link}
                  href="https://reactjs.org/"
                  target={"_blank"}
                rel="noreferrer"
                >
                  React
                </a>
              </li>
              <li>
                <a
                  className={styles.link}
                  href="https://es.redux.js.org/"
                  target={"_blank"}
                rel="noreferrer"
                >
                  Redux
                </a>
              </li>
              <li>
                <a
                  className={styles.link}
                  href="https://reactjs.org/"
                  target={"_blank"}
                rel="noreferrer"
                >
                  React Router DOM
                </a>
              </li>
              <li>
                <a
                  className={styles.link}
                  href="https://formik.org/"
                  target={"_blank"}
                rel="noreferrer"
                >
                  Formik
                </a>
              </li>
              <li>
                <a
                  className={styles.link}
                  href="https://tailwindcss.com/"
                  target={"_blank"}
                rel="noreferrer"
                >
                  tailwindcss
                </a>
              </li>
              <li>
                <a
                  className={styles.link}
                  href="https://getbootstrap.com/"
                  target={"_blank"}
                rel="noreferrer"
                >
                  booststrap
                </a>
              </li>
              <li>
                <Link href={"/habilidades"}>
                  <a className={styles.link}>Mas Librerias</a>
                </Link>
              </li>
            </ul>
            <ul className={styles.item}>
              <li className={styles.despegable} onClick={(e) => despeglar(e)}>
                <h2 className={styles.titulo}>Paginas</h2>
                <div className="iconos-despegables">
                  <i className="bx bx-minus menos" />
                  <i className="bx bx-plus mas" />
                </div>
              </li>
              <li>
                <Link href={"/"}>
                  <a className={styles.link}>Inicio</a>
                </Link>
              </li>
              <li>
                <Link href={"/proyectos"}>
                  <a className={styles.link}>Proyectos</a>
                </Link>
              </li>
              <li>
                <Link href={"/hobies"}>
                  <a className={styles.link}>Hobies</a>
                </Link>
              </li>
              <li>
                <Link href={"/habilidades"}>
                  <a className={styles.link}>Habilidades</a>
                </Link>
              </li>
              <li>
                <Link href={"/contacto"}>
                  <a className={styles.link}>Contacto</a>
                </Link>
              </li>
            </ul>
            <ul className={styles.item}>
              <li className={styles.despegable} onClick={(e) => despeglar(e)}>
                <h2 className={styles.titulo}>Redes Sociales</h2>
                <div className="iconos-despegables">
                  <i className="bx bx-minus menos" />
                  <i className="bx bx-plus mas" />
                </div>
              </li>
              <li>
                <a
                  className={styles.link}
                  href="https://github.com/MartinAlexanderFloresTorres"
                  target={"_blank"}
                rel="noreferrer"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  className={styles.link}
                  href="https://web.facebook.com/garena.flores.9"
                  target={"_blank"}
                rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  className={styles.link}
                  href="https://www.instagram.com/martin_flores_28"
                  target={"_blank"}
                rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className={styles.link}
                  href="https://www.linkedin.com/in/martin-alexander-flores-torres-993298245/"
                  target={"_blank"}
                rel="noreferrer"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  className={styles.link}
                  href="https://twitter.com/Martinflores_21"
                  target={"_blank"}
                rel="noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className={styles.link}
                  href="https://api.whatsapp.com/send?phone=929254912&text=Hola Martin, Me gustaria Contratarte."
                  target={"_blank"}
                rel="noreferrer"
                >
                  Whatsapp
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.bottom}>
            <p className={styles.copyright}>
              Copyright © 2022 whitedev. All rights reserved.
            </p>
            <div className={styles.iconos}>
              <a
                href="https://github.com/MartinAlexanderFloresTorres"
                target={"_blank"}
              rel="noreferrer"
                title="github"
              >
                <i className="bx bxl-github" />
              </a>
              <a
                href="https://www.linkedin.com/in/martin-alexander-flores-torres-993298245/"
                target={"_blank"}
              rel="noreferrer"
                title="linkedin"
              >
                <i className="bx bxl-linkedin" />
              </a>
              <a
                href="https://www.instagram.com/martin_flores_28"
                target={"_blank"}
              rel="noreferrer"
                title="instagram"
              >
                <i className="bx bxl-instagram" />
              </a>
              <a
                href="https://web.facebook.com/garena.flores.9"
                target={"_blank"}
              rel="noreferrer"
                title="facebook"
              >
                <i className="bx bxl-facebook" />
              </a>
            </div>
            <div className={styles.botones}>
              <div className={styles.estado}>
                Estado:{" "}
                <div>
                  <span></span> Disponible
                </div>
              </div>

              <div className={styles.themaContenedor}>
                {tema == "oscuro" ? (
                  <i className="bx bx-moon"></i>
                ) : (
                  <i className="bx bx-sun"></i>
                )}
                <select
                  value={tema}
                  onChange={(e) => setTema(e.target.value)}
                  className={styles.thema}
                >
                  <option value="oscuro">Oscuro</option>
                  <option value="claro">Claro</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
