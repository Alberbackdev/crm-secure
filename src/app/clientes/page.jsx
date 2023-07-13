import ButtonsActions from "../../components/listaClientes/buttonsActions/buttonsActions"
import Listado from "../../components/listaClientes/listado/Listado"


//This is form for new client

export default function lista() {

    return (
        <>
            <div style={{ marginLeft: '41px', marginTop: '3rem' }}>
                <ButtonsActions />
                <Listado />
            </div>
        </>
    )
}
