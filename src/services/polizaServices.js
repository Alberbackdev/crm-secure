import axios from "axios";
//READ
export async function getPolizeAPI() {
    const res = await axios.get("http://localhost:3000/api/clientes/polizas");
    const data = await res.data
    return data
}

//CREATE
export async function createPolizeAction(ev, values, reset) {
    ev.preventDefault();
    const res = await axios.post("/api/clientes/polizas", values);
    reset();
    return res
} 

//UPDATE
export async function updatePolizeAction(ev, values, reset, id) {
    console.log(values, id)
    ev.preventDefault();
    const res = await axios.put(`/api/clientes/polizas/${id}`, values);
    reset();
    return res;
} 

