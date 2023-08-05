import axios from "axios";

//Crea un client
export async function createClientAction(ev, values, reset) {
    ev.preventDefault();
    const res = await axios.post("../api/clientes/clientes", values);
    reset();
    return res;
}

//hacer que actualice y elimine