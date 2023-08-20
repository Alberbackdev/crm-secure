import axios from "axios";
import { urlApiDev } from "./api";

//READ
export async function getBeneficiariosAPI(params) {
    return await axios.get(`${urlApiDev}/clientes/beneficiarios?id=${params}`)
    .then(response => response)
}

//CREATE
export async function createPayeeAction(ev, values, reset) {
    ev.preventDefault();
    return await axios.post(`${urlApiDev}/clientes/beneficiarios`, values)
    .then(response => response );
}


//UPDATE
export async function updatePayeeAction(ev, values, reset, id) {
    console.log(values, id)
    ev.preventDefault();
    return await axios.post(`${urlApiDev}/clientes/beneficiarios/${id}`, values)
    .then(response => response);
} 

//DELETE