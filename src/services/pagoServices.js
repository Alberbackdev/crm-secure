import axios from "axios";
import { urlApiDev } from "./api";

export async function getPagoAPI(id) {
    return await axios.get(`${urlApiDev}/clientes/${!id ? 'pagos/' : `pagos/${id}`}`)
        .then(response => response)
}


export async function createPagoAction(values) {
    const res = await axios.post(`${urlApiDev}/clientes/pagos`, values);
    return res
}

//UPDATE
export async function updatePagoAction(values) {
    return await axios.patch(`${urlApiDev}/clientes/pagos/${values._id}`, values)
    .then(response => response);
} 
