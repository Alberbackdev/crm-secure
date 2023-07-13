import axios from "axios";

export async function createClientAction(ev, values, reset) {
    ev.preventDefault();
    await axios.post("../api/clientes/clientes", values);
    reset();
}