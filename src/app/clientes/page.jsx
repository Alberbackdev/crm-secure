
import ButtonsActions from "@/src/components/listaClientes/buttonsActions/ButtonsActions";
import Listado from "@/src/components/listaClientes/listado/Listado";
import axios from "axios";

//This is form for new client

export default async function Lista() {
  const res = await axios.get("http://localhost:3000/api/clientes/clientes");
  const clientes = await res.data
  
  return (
      <div style={{ marginLeft: "41px", marginTop: "3rem" }}>
        <ButtonsActions />
        <Listado data={clientes}/>
      </div>
  );
}
