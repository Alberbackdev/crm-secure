import Layout from "../../components/LayoutFolder/Layout"
import ContainerSelectDatosPagos from "../../../components/ContainerSelectDatosPagos/ContainerSelectDatosPagos"
import CardRightDatosPagos from "../../../components/CardRightDatosPagos/CardRightDatosPagos"


function pagos() {
  return (
    <Layout>
      <div style={{display: "flex", width: "100%", marginTop: '3rem', justifyContent: 'space-evenly'}}> 
        <ContainerSelectDatosPagos />
        <CardRightDatosPagos />
      </div>
    </Layout>
  )
}



export default pagos