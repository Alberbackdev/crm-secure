import axios from "axios";
import { urlApiDev } from "./api";
//READ
export async function getPolizeAPI(params) {
    return await axios.get(`${urlApiDev}/clientes/polizas?id=${params}`)
    .then(response => response)
}

//CREATE
export async function createPolizeAction(ev, values, reset) {
    ev.preventDefault();
    return await axios.post(`${urlApiDev}/clientes/polizas`, values)
    .then(response => response);
    } 

//UPDATE
export async function updatePolizeAction(ev, values, reset, id) {
    console.log(values, id)
    ev.preventDefault();
    const res = await axios.put(`${urlApiDev}/clientes/polizas/${id}`, values);
    reset();
    return res;
} 

export async function deletePolizaAction(ev, id) {
    ev.preventDefault();
    return await axios.delete(`${urlApiDev}/clientes/polizas?id=${id}`)
    .then(response => response)
        
}