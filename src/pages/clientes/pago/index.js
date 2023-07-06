
import ContainerSelectDatosPagos from "../../../components/ContainerSelectDatosPagos/ContainerSelectDatosPagos"
import CardRightDatosPagos from "../../../components/CardRightDatosPagos/CardRightDatosPagos"
import Layout from "../../../components/LayoutFolder/Layout"


function pagos() {
    return (
        <Layout>
            <div style={{ display: "flex", width: "100%", marginTop: '3rem', justifyContent: 'space-evenly' }}>
                <ContainerSelectDatosPagos />
                <CardRightDatosPagos />
            </div>
        </Layout>
    )
}



export default pagos