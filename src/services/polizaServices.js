import axios from "axios";

export async function createPolizeAction(ev, values, reset) {
    ev.preventDefault();
    await axios.post("../api/clientes/polize", values);
    reset();
}

export async function updatePolizeAction(ev, values, reset) {
    ev.preventDefault();
    await axios.put("../api/clientes/polize", values);
    reset();
}