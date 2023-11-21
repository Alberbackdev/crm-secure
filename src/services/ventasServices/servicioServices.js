import axios from "axios";
import { urlApiDev } from "../api";


export async function getServicioAPI(id) {
  return await axios.get(`${urlApiDev}/ventas/${!id ? 'servicio' : `servicio/${id}`}`)
    .then(response => response)
}


//Crea un client
export async function createServicioAction(values) {
  return await axios.post(`${urlApiDev}/ventas/servicio`, values).then(response => response)
}


//hacer que actualice cada campo
export async function updateServicioAction(values) {
  console.log(values)
  return await axios.patch(`${urlApiDev}/ventas/servicio/${values._id}`, values)
    .then(response => response)
}


//elimine

export async function deleteServicioAction(ev, id) {
  ev.preventDefault();
  return await axios.delete(`${urlApiDev}/venta/servicio/${id}`)
    .then(response => response)
    .then(response => {
      if (response.status === 200) {
        console.log('El registro se elimino correctamente.')
      } else {
        console.log('Ocurrió un error al eliminar el registro.')
      }
    })
}