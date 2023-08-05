import axios from "axios";

//Crea un client
export async function createClientAction(ev, values, reset) {
    ev.preventDefault();
    const res = await axios.post("../api/clientes/clientes", values);
    reset();
    return res;
}

//hacer que actualice y elimine

export async function updateClientAction(ev, values, reset) {
    ev.preventDefault();
    await axios.put('../api/clientes/clientes/64c2b1b0b1f2d024ed4afa24', values);
    reset();
}