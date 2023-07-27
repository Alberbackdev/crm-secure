import axios from "axios";

export async function createPayeeAction(ev, values, reset) {
    ev.preventDefault();
    await axios.post("../api/clientes/beneficiarios", values);
    reset();
}