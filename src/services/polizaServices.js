import axios from "axios";
import { urlApiDev } from "./api";
//READ
/* export async function getPolizeAPI(params) {
    return await axios.get(`${urlApiDev}/clientes/polizas?id=${params}`)
    .then(response => response)
} */

export async function getPolizeAPI(id) {
    return await axios.get(`${urlApiDev}/clientes/${!id ? 'polizas/' : `polizas/${id}`}`)
        .then(response => response)
}

//CREATE
export async function createPolizeAction(ev, values) {
    ev.preventDefault();
    return await axios.post(`${urlApiDev}/clientes/polizas`, values)
    .then(response => response);
    } 

//UPDATE
export async function updatePolizeAction(values) {
    console.log(values)
    return await axios.patch(`${urlApiDev}/clientes/polizas/${values._id}`, values)
    .then(response => response);
} 

export async function deletePolizaAction(ev, id) {
    ev.preventDefault();
    return await axios.delete(`${urlApiDev}/clientes/polizas?id=${id}`)
    .then(response => response)
        
}