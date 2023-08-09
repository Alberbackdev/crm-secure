import axios from "axios";

export async function getPolizeAPI() {
    const resB = await axios.get("http://localhost:3000/api/clientes/polizas");
    return resB.data;
}

export async function createPolizeAction(ev, values, reset) {
    ev.preventDefault();
    await axios.post("../api/clientes/polizas", values);
    reset();
}

export async function updatePolizeAction(ev, values, reset) {
    ev.preventDefault();
    const res = await axios.put("../api/clientes/polizas", values);
    reset();
    return res;
}