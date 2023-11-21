import axios from "axios";
import { urlApiDev } from "../api";


export async function getDifuntosAPI(id) {
  return await axios.get(`${urlApiDev}/ventas/${!id ? 'difunto' : `difunto/${id}`}`)
    .then(response => response)
}


//Crea un Difunto
export async function createDifuntoAction(values) {
  //ev.preventDefault()
  return await axios.post(`${urlApiDev}/ventas/difunto`, values).then(response => response)
}


//hacer que actualice cada campo
export async function updateDifuntoAction(values) {
  console.log(values)
  return await axios.patch(`${urlApiDev}/ventas/difunto/${values._id}`, values)
    .then(response => response)
}


//elimine

export async function deleteDifuntoAction(ev, id) {
  ev.preventDefault();
  return await axios.delete(`${urlApiDev}/venta/difunto/${id}`)
    .then(response => response)
    .then(response => {
      if (response.status === 200) {
        console.log('El registro se elimino correctamente.')
      } else {
        console.log('Ocurrió un error al eliminar el registro.')
      }
    })
}