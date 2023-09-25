
import BarSeguimientoProceso from "@/src/components/BarSeguimientoProceso/BarSeguimientoProceso"
import Beneficiarios from "@/src/components/Beneficiarios/Beneficiarios"
import { FormPolize } from "@/src/components/FormPolize/FormPolize"
//This is form polize and payees, for register an client

export default function CrearPoliza({ params, searchParams }) {
  
  //console.log(params, searchParams);

  return (
    <>
      <BarSeguimientoProceso currentPage={'Poliza'} useBarTo={'Clientes'} />
      <div
        style={{
          display: "flex",
          width: "100%",
          marginTop: "1.3rem",
          justifyContent: "space-around",
        }}
      > 
        <FormPolize poliza={searchParams} client={params} />
        <Beneficiarios poliza={searchParams} cliente={params} />
      </div>
      {/* <FormPayees />  MODAAAL */}
    </>
  );
}