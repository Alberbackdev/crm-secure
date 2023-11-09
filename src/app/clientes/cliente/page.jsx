"use client";
import { useSelector } from 'react-redux'
import { useState } from "react"
import { FormClientData } from "@/src/components/FormClientData/FormClientData";
// import { InputCodigoSeguro } from "../../../components/InputCodigoSeguro/InputCodigoSeguro";
import { FormEditClientData } from "@/src/components/FormClientData/FormEditClientData";
import BarSeguimientoProceso from "@/src/components/BarSeguimientoProceso/BarSeguimientoProceso"


//This is form for new client

export default function CrearCliente({params}) {
  //const [poliza, setPoliza] = useState({ codigoPoliza: "", _id: "" });
  const isUpdatingClientData = useSelector((state) => state.client.updatingClientData) // boolean value
  // const { id } = params; 

  return (
    <>
      <BarSeguimientoProceso
        currentPage={"Datos Principales"}
        useBarTo={"Clientes"}
      />
      { !isUpdatingClientData ? (
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
          }}
        >
          <FormClientData />
        </div>
      ) : (
        <FormEditClientData params={params} />
      )}
    </>
  );
}
