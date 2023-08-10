import axios from "axios";

export async function getBeneficiariosAPI() {
    const res = await fetch("http://localhost:3000/api/clientes/beneficiarios");
    return res.json();
}

export async function createPayeeAction(ev, values, reset) {
    ev.preventDefault();
    await axios.post("../api/clientes/beneficiarios", values);
    reset();
}