import ButtonsActions from "@/src/components/listaClientes/buttonsActions/ButtonsActions";
import Listado from "@/src/components/listaClientes/listado/Listado";

//This is form for new client

export default function Lista() {
  return (
    <>
      <div style={{ marginLeft: "41px", marginTop: "3rem" }}>
        <ButtonsActions />
        <Listado />
      </div>
    </>
  );
}
