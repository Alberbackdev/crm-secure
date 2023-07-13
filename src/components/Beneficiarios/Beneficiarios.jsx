'use client';

import { useState } from 'react'
import style from './beneficiarios.module.css'
import Image from 'next/image'
import { FormBeneficiario } from '../FormPayees/FormBeneficiario'


function Beneficiarios() {

    const [modalFormBeneficiario, setModalFormBeneficiario] = useState(false); // Abrir modal

  return (
    <div className={style.container}>
        {
            // MODAL  FormBeneficiario
            modalFormBeneficiario && <FormBeneficiario setModalFormBeneficiario={setModalFormBeneficiario} />
        }

        <div className={style.header}>
           <h3>Beneficiarios: 3/6</h3> 

            <Image 
                src='/userplus.png' 
                alt="Plus user icon" 
                className={style.avatar}
                width={40}
                height={40}
                style={{cursor: 'pointer'}}
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
                        <p>Maria Victoria Santos</p>
                    </div>
                    <div>
                        <p className={style.title} style={{textAlign: 'right'}}>Fecha de Nacimiento</p>
                        <p style={{textAlign: 'right'}}>25/04/2000</p>
                    </div>                   
                </div>
                <div className={style.cardBottom}>
                    <div>
                        <p className={style.title}>Cedula</p>
                        <p>V- 24569871</p>
                    </div>
                    <div>
                        <p className={style.title} style={{textAlign: 'right'}}>Edad</p>
                        <p style={{textAlign: 'right'}}>22 años</p>
                    </div>
                </div>
            </div>
            <div className={style.cardBeneficiario}>
                <div className={style.cardTop}>
                    <p>Editar</p>
                </div>
                <div className={style.cardCenter}>
                    <div>
                        <p className={style.title}>Nombre</p>
                        <p>Maria Victoria Santos</p>
                    </div>
                    <div>
                        <p className={style.title} style={{textAlign: 'right'}}>Fecha de Nacimiento</p>
                        <p style={{textAlign: 'right'}}>25/04/2000</p>
                    </div>                   
                </div>
                <div className={style.cardBottom}>
                    <div>
                        <p className={style.title}>Cedula</p>
                        <p>V- 24569871</p>
                    </div>
                    <div>
                        <p className={style.title} style={{textAlign: 'right'}}>Edad</p>
                        <p style={{textAlign: 'right'}}>22 años</p>
                    </div>
                </div>
            </div>
            <div className={style.cardBeneficiario}>
                <div className={style.cardTop}>
                    <p>Editar</p>
                </div>
                <div className={style.cardCenter}>
                    <div>
                        <p className={style.title}>Nombre</p>
                        <p>Maria Victoria Santos</p>
                    </div>
                    <div>
                        <p className={style.title} style={{textAlign: 'right'}}>Fecha de Nacimiento</p>
                        <p style={{textAlign: 'right'}}>25/04/2000</p>
                    </div>                   
                </div>
                <div className={style.cardBottom}>
                    <div>
                        <p className={style.title}>Cedula</p>
                        <p>V- 24569871</p>
                    </div>
                    <div>
                        <p className={style.title} style={{textAlign: 'right'}}>Edad</p>
                        <p style={{textAlign: 'right'}}>22 años</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Beneficiarios