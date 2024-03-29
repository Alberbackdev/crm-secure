import axios from "axios";
import { urlApiDev } from "./api";

export async function getClientsAPI(id) {
    return await axios.get(`${urlApiDev}/clientes/${!id ? 'clientes' : `clientes/${id}`}`)
    .then( response => response)
}


//Crea un client
export async function createClientAction(values) {
    return await axios.post(`${urlApiDev}/clientes/clientes`, values).then(response => response)
}


//hacer que actualice cada campo
export async function updateClientAction(values) {
    console.log(values)
    return await axios.patch(`${urlApiDev}/clientes/clientes/${values._id}`, values)
    .then(response => response)
}


//elimine

export async function deleteClientAction(ev, id) {
    ev.preventDefault();
    return await axios.delete(`${urlApiDev}/clientes/clientes/${id}`)
    .then(response => response)
        .then(response => {
            if (response.status === 200) {
                console.log('El registro se elimino correctamente.')
            } else {
                console.log('Ocurrió un error al eliminar el registro.')
            }
        })
}