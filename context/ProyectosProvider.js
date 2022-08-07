import { createContext, useState, useEffect } from "react";

const ProyectosContext = createContext();

const ProyectosProvider = ({ children }) => {
  const [proyectos, setProyectos] = useState([]);
  const [entradaProyectos, setEntradaProyectos] = useState([]);

  const consultarProyectos = async () => {
    try {
      const respuesta = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/proyectos`
      );
      const data = await respuesta.json();
      const entrada = data.slice(0, 6);
      setEntradaProyectos(entrada);
      setProyectos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    consultarProyectos();
  }, []);

  return (
    <ProyectosContext.Provider value={{ proyectos, entradaProyectos }}>
      {children}
    </ProyectosContext.Provider>
  );
};

export { ProyectosProvider };

export default ProyectosContext;
