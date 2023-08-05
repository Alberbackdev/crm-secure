import axios from "axios";

export async function getClientsAPI() {
    const res = await axios.get("http://localhost:3000/api/clientes/clientes");
    console.log(res.data)
    return res.data;
}


//Crea un client
export async function createClientAction(ev, values, reset) {
    ev.preventDefault();
    const res = await axios.post("../api/clientes/clientes", values);
    reset();
    return res;
}

//hacer que actualice y elimine