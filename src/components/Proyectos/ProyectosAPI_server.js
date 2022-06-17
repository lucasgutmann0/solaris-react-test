const API_URL = "http://127.0.0.1:8000/solaris_api/proyectos/";

//recibir proyectos (GET)
export const proyectos = async () => {
  return await fetch(API_URL);
};

//metodos

//METODO POST - PROYECTO
export const registrarProyecto = async (nuevoProyecto) => {
  return await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      'nombre': String(nuevoProyecto.nombre).trim(),
      'direccion': String(nuevoProyecto.direccion).trim(),
      'latitud': parseFloat(nuevoProyecto.latitud),
      'longitud': parseFloat(nuevoProyecto.longitud),
      'capacidad': parseInt(nuevoProyecto.capacidad),
    }),
  });
};
