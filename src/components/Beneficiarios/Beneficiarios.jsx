"use client";

import { useState } from "react";
import style from "./beneficiarios.module.css";
import Image from "next/image";
import { FormBeneficiario } from "../FormPayees/FormBeneficiario";

export default function Beneficiarios(poliza, clientes) {
  const [modalFormBeneficiario, setModalFormBeneficiario] = useState(false); // Abrir modal
  console.log(poliza, clientes)

  return (
    <div className={style.container}>
      {
        // MODAL  FormBeneficiario
        modalFormBeneficiario && (
          <FormBeneficiario
            setModalFormBeneficiario={setModalFormBeneficiario}
          />
        )
      }

      <div className={style.header}>
        <h3>{data._id}</h3>

        <Image
          src="/userplus.png"
          alt="Plus user icon"
          className={style.avatar}
          width={40}
          height={40}
          style={{ cursor: "pointer" }}
          onClick={() => setModalFormBeneficiario(true)}
        />
      </div>

      <div className={style.listaBeneficiarios}>
        <div className={style.cardBeneficiario}>
          <div className={style.cardTop}>
            <p>Editar</p>
          </div>
          <div className={style.cardCenter}>
            <div>
              <p className={style.title}>Nombre</p>
              <p>{beneficiario.name_payee}</p>
            </div>
            <div>
              <p className={style.title} style={{ textAlign: "right" }}>
                Fecha de Nacimiento
              </p>
              <p style={{ textAlign: "right" }}> {beneficiario.dateofbirth} </p>
            </div>
          </div>
          <div className={style.cardBottom}>
            <div>
              <p className={style.title}>Cedula</p>
              <p>{beneficiario.cidentified_payee}</p>
            </div>
            <div>
              <p className={style.title} style={{ textAlign: "right" }}>
                Edad
              </p>
              <p style={{ textAlign: "right" }}>
                {" "}
                {beneficiario.age_payee} años
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
