import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/Header.module.css";

function Header() {
  const [menu, setMenu] = useState(false);
  const [activo, setActivo] = useState(false);
  const [width, setWidth] = useState(26);
  const [translado, setTranslado] = useState(0);
  const { pathname } = useRouter();

  useEffect(() => {
    const body = document.querySelector("body");
    if (activo) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }, [activo]);

  useEffect(() => {
    const media_query = window.matchMedia("(max-width: 990px)");
    const mediaMenu = (mq) => {
      if (mq.matches) {
        setMenu(true);
      } else {
        setMenu(false);
      }
    };
    mediaMenu(media_query);
    media_query.addListener(mediaMenu);
  }, []);

  const transladar = (e) => {
    setWidth(e.target.offsetWidth);
    setTranslado(e.target.offsetLeft);
    e.target.parentElement.querySelector("#transladar").style.opacity = 1;
  };
  const ocultar = (e) => {
    e.target.parentElement.querySelector("#transladar").style.opacity = 0;
  };

  return (
    <header className={styles.header}>
      <section className="contenedor">
        <nav className={styles.col}>
          <div className={styles.col}>
            <Link href={"/"}>
              <a
                onClick={() => setActivo(false)}
                className={`${pathname == "/404" && styles.animacion} ${
                  styles.logo
                }`}
                title={"Inicio"}
              >
                <i className="bx bx-terminal" />
              </a>
            </Link>
            {menu && (
              <Link href={`${pathname}`}>
                <a className={styles.white}>
                  {pathname == "/" ? "Home" : pathname.split("/")[1]}
                </a>
              </Link>
            )}
          </div>

          <section
            className={`${styles.navegacion} ${activo && styles.activo}`}
          >
            <div className={`${styles.col} ${styles.relative}`}>
              <div
                id="transladar"
                className={styles.transladar}
                style={{
                  width: `${width}px`,
                  transform: `translateX(${translado}px)`,
                }}
              ></div>
              <svg
                data-testid="geist-icon"
                fill="none"
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                viewBox="0 0 24 24"
                width="26"
                height="26"
                color="#333"
              >
                <path d="M16.88 3.549L7.12 20.451"></path>
              </svg>
              <Link href={"/"}>
                <a
                  onMouseOver={(e) => transladar(e)}
                  onMouseOut={(e) => ocultar(e)}
                  onClick={() => setActivo(false)}
                  className={`${pathname == "/" && styles.white}`}
                >
                  Inicio
                </a>
              </Link>
              <svg
                data-testid="geist-icon"
                fill="none"
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                viewBox="0 0 24 24"
                width="26"
                height="26"
                color="#333"
              >
                <path d="M16.88 3.549L7.12 20.451"></path>
              </svg>
              <Link href={"/proyectos"}>
                <a
                  onMouseOver={(e) => transladar(e)}
                  onMouseOut={(e) => ocultar(e)}
                  onClick={() => setActivo(false)}
                  className={`${pathname == "/proyectos" && styles.white}`}
                >
                  Proyectos
                </a>
              </Link>
              <svg
                data-testid="geist-icon"
                fill="none"
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                viewBox="0 0 24 24"
                width="26"
                height="26"
                color="#333"
              >
                <path d="M16.88 3.549L7.12 20.451"></path>
              </svg>
              <Link href={"/hobies"}>
                <a
                  onMouseOver={(e) => transladar(e)}
                  onMouseOut={(e) => ocultar(e)}
                  onClick={() => setActivo(false)}
                  className={`${pathname == "/hobies" && styles.white}`}
                >
                  Hobbies
                </a>
              </Link>
              <svg
                data-testid="geist-icon"
                fill="none"
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                viewBox="0 0 24 24"
                width="26"
                height="26"
                color="#333"
              >
                <path d="M16.88 3.549L7.12 20.451"></path>
              </svg>
              <Link href={"/habilidades"}>
                <a
                  onMouseOver={(e) => transladar(e)}
                  onMouseOut={(e) => ocultar(e)}
                  onClick={() => setActivo(false)}
                  className={`${pathname == "/habilidades" && styles.white}`}
                >
                  Habilidades
                </a>
              </Link>
              <svg
                data-testid="geist-icon"
                fill="none"
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                viewBox="0 0 24 24"
                width="26"
                height="26"
                color="#333"
              >
                <path d="M16.88 3.549L7.12 20.451"></path>
              </svg>
              <Link href={"/contacto"}>
                <a
                  onMouseOver={(e) => transladar(e)}
                  onMouseOut={(e) => ocultar(e)}
                  onClick={() => setActivo(false)}
                  className={`${pathname == "/contacto" && styles.white}`}
                >
                  Contacto
                </a>
              </Link>
            </div>

            <div className={`${styles.col} ${styles.iconos}`}>
              <a
                className={styles.descargar}
                onClick={() => setActivo(false)}
                href="/pdf/MartinAlexanderFloresTorres-CV.pdf"
                download
              >
                Descargar CV
                <i className="bx bxs-download" />
              </a>
              {pathname !== "/contacto" && (
                <Link href={"/contacto"}>
                  <a
                    className={styles.descargar}
                    onClick={() => setActivo(false)}
                    href="#"
                  >
                    Contáctame
                    <i className="bx bx-envelope" />
                  </a>
                </Link>
              )}
            </div>
          </section>

          <div className={styles.menu} onClick={() => setActivo(!activo)}>
            {activo ? (
              <i className="bx bx-x" />
            ) : (
              <i className="bx bx-menu-alt-right" />
            )}
          </div>
        </nav>
      </section>
    </header>
  );
}

export default Header;
