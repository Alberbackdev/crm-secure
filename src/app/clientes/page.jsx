
import ButtonsActions from "@/src/components/listaClientes/buttonsActions/buttonsActions";
import Listado from "@/src/components/listaClientes/listado/Listado";


//This is form for new client

export default function lista() {
  return (
    <>
      <div style={{ marginLeft: "41px", marginTop: "3rem" }}>
        <ButtonsActions />
        <Listado />
      </div>
    </>
  );
}
