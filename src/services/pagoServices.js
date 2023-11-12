import axios from "axios";
import { urlApiDev } from "./api";

export async function createPagoAction(ev, values) {
    ev.preventDefault();
    const res = await axios.post(`${urlApiDev}/clientes/pagos`, values);
    return res
}