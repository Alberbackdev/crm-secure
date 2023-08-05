import axios from "axios";

export async function getPolizeAPI() {
    const resB = await axios.get("../api/clientes/polizas");
    console.log(resB.data)
    return resB;
}

export async function createPolizeAction(ev, values, reset) {
    ev.preventDefault();
    await axios.post("../api/clientes/polizas", values);
    reset();
}

export async function updatePolizeAction(ev, values, reset) {
    ev.preventDefault();
    const res = await axios.put("../api/clientes/polize", values);
    reset();
    return res;
}