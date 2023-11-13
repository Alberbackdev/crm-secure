import axios from "axios";
import { urlApiDev } from "./api";



export async function getVentasAPI(id) {
    return await axios.get(`${urlApiDev}/ventas`)
    .then( response => response)
}
