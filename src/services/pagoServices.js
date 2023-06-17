import axios from "axios";

export async function createPagoAction(ev, values, reset) {
    ev.preventDefault();
    await axios.post("../api/clientes/pago", values);
    reset();
}