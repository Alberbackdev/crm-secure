import axios from "axios";

//READ
export async function getBeneficiariosAPI() {
    const res = await axios.get("http://localhost:3000/api/clientes/beneficiarios");
    const data = await res.data
    return data
}

//CREATE
export async function createPayeeAction(ev, values, reset) {
    ev.preventDefault();
    const res = await axios.post("/api/clientes/beneficiarios", values);
    reset();
    return res
}


//UPDATE
export async function updatePayeeAction(ev, values, reset, id) {
    console.log(values, id)
    ev.preventDefault();
    const res = await axios.put(`/api/clientes/beneficiarios/${id}`, values);
    reset();
    return res;
} 

//DELETE