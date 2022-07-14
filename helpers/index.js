export const formatearFecha = (fecha) => {
  const fechaFormateada = new Date(fecha);
  /* weekday: "long", */
  const opciones = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return fechaFormateada.toLocaleDateString(fechaFormateada, opciones);
};