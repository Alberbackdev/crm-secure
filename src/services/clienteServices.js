import axios from "axios";
import { fetchData } from "next-auth/client/_utils";

export async function getClientsAPI() {
    const res = await fetch("http://localhost:3000/api/clientes/clientes");
    return res.json();//retorna la data de la api ref a la almacenada en la db
}


//Crea un client
export async function createClientAction(ev, values, reset) {
    ev.preventDefault();
    const res = await axios.post("../api/clientes/clientes", values);
    reset();
    return res;
}

//hacer que actualice y elimine

export async function deleteClientAction(ev, value) {
    ev.preventDefault();
    const res = await axios.delete(`../api/clientes/clientes/${value}`);
    return res;
}