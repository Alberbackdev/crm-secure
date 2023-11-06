
import BarSeguimientoProceso from "@/src/components/BarSeguimientoProceso/BarSeguimientoProceso"
import Beneficiarios from "@/src/components/Beneficiarios/Beneficiarios"
import { FormPolize } from "@/src/components/FormPolize/FormPolize"
import style from '@/src/styles/stylePages.module.css'
//This is form polize and payees, for register an client

export default function CrearPoliza({ params, searchParams }) {
  
  //console.log(params, searchParams);

  return (
    <>
      <BarSeguimientoProceso currentPage={'Poliza'} useBarTo={'Clientes'} />
      <div className={style.polizaPage}> 
        <FormPolize poliza={searchParams} client={params} />
        <Beneficiarios poliza={searchParams} cliente={params} />
      </div>
      {/* <FormPayees />  MODAAAL */}
    </>
  );
}