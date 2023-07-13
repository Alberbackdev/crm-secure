import axios from "axios";

export async function createPayeeAction(ev, values, reset) {
    ev.preventDefault();
    await axios.post("../api/clientes/payees", values);
    reset();
}