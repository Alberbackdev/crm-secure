import { getClientsAPI } from "../services/clienteServices";
import { getPolizeAPI } from "../services/polizaServices";

export async function getInfoAPI(params) {
    const info = {
        IdPoliza: await getPolizeAPI(),
        IdCliente: await getClientsAPI(),
        listbeneficiarios: await getBeneficiariosAPI()
    }
    return info
}