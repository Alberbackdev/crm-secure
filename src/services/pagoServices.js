import axios from "axios";

export async function createPagoAction(ev, values) {
    ev.preventDefault();
    const res = await axios.post("/api/clientes/pagos", values);
    return res
}