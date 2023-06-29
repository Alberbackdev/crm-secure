import Layout from "../../components/LayoutFolder/Layout"
import DatosPagos from "../../components/DatosPagos/DatosPagos"


function pagos() {
  return (
    <Layout>
      <div style={{display: "flex", width: "100%", marginTop: '3rem', justifyContent: 'space-around'}}> 
        <DatosPagos />
      </div>
    </Layout>
  )
}



export default pagos