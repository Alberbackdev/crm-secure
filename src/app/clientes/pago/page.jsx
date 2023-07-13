

import ContainerSelectDatosPagos from "@/src/components/ContainerSelectDatosPagos/ContainerSelectDatosPagos"

import CardRightDatosPagos from "@/src/components/CardRightDatosPagos/CardRightDatosPagos"


function pagos() {
    return (
        <>
            <div style={{ display: "flex", width: "100%", marginTop: '3rem', justifyContent: 'space-evenly' }}>
                <ContainerSelectDatosPagos />
                <CardRightDatosPagos />
            </div>
        </>
    )
}



export default pagos