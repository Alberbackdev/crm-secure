import axios from "axios";
import { urlApiDev } from "../api";


export async function getResponsableAPI(id) {
  return await axios.get(`${urlApiDev}/ventas/${!id ? 'responsable' : `responsable/${id}`}`)
    .then(response => response)
}


//Crea un Responsable
export async function createResponsableAction(values) {
  return await axios.post(`${urlApiDev}/ventas/responsable`, values).then(response => response)
}


//hacer que actualice cada campo
export async function updateResponsableAction(values) {
  return await axios
    .patch(`${urlApiDev}/ventas/responsable/${values._id}`, values)
    .then((response) => response);
}


//elimine

export async function deleteResponsableAction(ev, id) {
  ev.preventDefault();
  return await axios
    .delete(`${urlApiDev}/venta/responsable/${id}`)
    .then((response) => response)
    .then((response) => {
      if (response.status === 200) {
        console.log("El registro se elimino correctamente.");
      } else {
        console.log("Ocurrió un error al eliminar el registro.");
      }
    });
}