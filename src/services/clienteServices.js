import axios from "axios";

//Crea un client
export async function createClientAction(ev, values, reset) {
    ev.preventDefault();
    await axios.post("../api/clientes/clientes", values);
    reset();
}

//hacer que actualice y elimine