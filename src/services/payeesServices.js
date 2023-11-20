import axios from "axios";
import { urlApiDev } from "./api";

//READ
export async function getBeneficiariosAPI(id) {
  return await axios
    .get(
      `${urlApiDev}/clientes/${!id ? "beneficiarios" : `beneficiarios/${id}`}`
    )
    .then((response) => response);
}

//CREATE
export async function createPayeeAction(values) {
    return await axios.post(`${urlApiDev}/clientes/beneficiarios`, values)
    .then(response => response );
}


//UPDATE
export async function updatePayeeAction(values) {   
    return await axios.patch(`${urlApiDev}/clientes/beneficiarios/${values._id}`, values)
    .then(response => response);
} 

//DELETE

export async function deletePayeeAction(idBeneficiario) {   
  return await axios.delete(`${urlApiDev}/clientes/beneficiarios/${idBeneficiario}`)
  .then(response => console.log(response));
} 