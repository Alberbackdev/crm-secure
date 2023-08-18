"use client";
import { FormClientData } from "@/src/components/FormClientData/FormClientData";
import { InputCodigoSeguro } from "../../../components/InputCodigoSeguro/InputCodigoSeguro";
import { getPolizeAPI } from "@/src/services/polizaServices";
import { useState } from "react";

//This is form for new client

export default function CrearCliente() {
  const [poliza, setPoliza] = useState({ codigoPoliza: "", _id: "" });

  /* const data = await getPolizeAPI();
  const res = data.pop()?._id
  console.log(res) */ 
  return (
    <>
      <InputCodigoSeguro setPoliza={setPoliza} />
      <FormClientData poliza={poliza} />
    </>
  );
}
