"use client";
import { FormClientData } from "@/src/components/FormClientData/FormClientData";
import { InputCodigoSeguro } from "../../../components/InputCodigoSeguro/InputCodigoSeguro";
//import { getPolizeAPI } from "@/src/services/polizaServices";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { FormEditClientData } from "@/src/components/FormClientData/FormEditClientData";
import BarSeguimientoProceso from "@/src/components/BarSeguimientoProceso/BarSeguimientoProceso"

//This is form for new client

export default function CrearCliente({params}) {
  const [poliza, setPoliza] = useState({ codigoPoliza: "", _id: "" });
  const { id } = params

  /* const data = await getPolizeAPI();
  const res = data.pop()?._id
  console.log(res) */ 
  return (
    <>
      <BarSeguimientoProceso currentPage={'Datos Principales'} useBarTo={'Clientes'} />
      {!id ? (
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
          }}
        >
          <FormClientData poliza={poliza} />
          <InputCodigoSeguro setPoliza={setPoliza} poliza={poliza} />
        </div>
      ) : (
        <FormEditClientData params={params} />
      )}
    </>
  );
}
