import axios from "axios";

export async function createPolizeAction(ev, values, reset) {
    ev.preventDefault();
    await axios.post("../api/clientes/polize", values);
    reset();
}