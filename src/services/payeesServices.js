import axios from "axios";

export async function getBeneficiariosAPI() {
    const resB = await axios.get("http://localhost:3000/api/clientes/beneficiarios");
    console.log(resB?.data)
    return resB?.data;
}

export async function createPayeeAction(ev, values, reset) {
    ev.preventDefault();
    await axios.post("../api/clientes/beneficiarios", values);
    reset();
}