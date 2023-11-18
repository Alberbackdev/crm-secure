"use client"

import { useState } from "react";
import style from "./beneficiarios.module.css";
import Image from "next/image";
import { FormBeneficiario } from "../FormPayees/FormBeneficiario";
import { useDispatch, useSelector } from "react-redux"
import { putBeneficiarioToUpdate, removerBeneficiario } from "@/src/redux/slices/beneficiarioReducer"


export default function Beneficiarios() {
  const dispatch = useDispatch();
  const beneficiarios = useSelector((state) => state.beneficiario.data);
  const [modalFormBeneficiario, setModalFormBeneficiario] = useState(false); // Abrir modal

  const handleEditButton = (beneficiario) => {
    dispatch(putBeneficiarioToUpdate(beneficiario));
    setModalFormBeneficiario(true);
  }

  return (
    <div className={style.container}>
      {        
        modalFormBeneficiario && // MODAL  FormBeneficiario
          <FormBeneficiario setModalFormBeneficiario={setModalFormBeneficiario} />        
      }

      <div className={style.header}>
        <h3>Beneficiarios</h3>

        { beneficiarios.length < 6 
            ? <Image
                src="/userplus.png"
                alt="Plus user icon"
                className={style.avatar}
                width={40}
                height={40}
                style={{ cursor: "pointer" }}
                onClick={() => setModalFormBeneficiario(true)}
              />
            : <p className={style.limiteBeneficiarios}>Limite de beneficiarios alcanzados.</p>          
        }
      </div>

      <div className={style.listaBeneficiarios}>
        {
          beneficiarios.length > 0 
          ? 
            beneficiarios.map(beneficiario => (
              <div className={style.cardBeneficiario} key={beneficiario.cidentified_payee}>
                <div className={style.cardTop}>
                  <p onClick={() => handleEditButton(beneficiario)}>Editar</p>
                  <p onClick={() => dispatch(removerBeneficiario({cidentified_payee: beneficiario.cidentified_payee}))}>Remover</p>
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
                    <p style={{ textAlign: "right" }}>{beneficiario.dateofbirth}</p>
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
                    <p style={{ textAlign: "right" }}>{beneficiario.age_payee}</p>
                  </div>
                </div>
              </div>
            ))          
          : <p>Aquí se verán los beneficiarios.</p>
        }
      </div>
    </div>
  );
}
