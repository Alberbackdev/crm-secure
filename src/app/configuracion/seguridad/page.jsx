'use client';
import {useState} from 'react'
import MenuConfig from "@/src/components/MenuConfiguracion/MenuConfig"
import CambiarClave from "@/src/components/Ajustes/CambiarClave/CambiarClave"
import ContainerPrinc from "@/src/components/LayoutFolder/Layout"
import CodigoSeguridad from '@/src/components/Ajustes/CodigoSeguridad/CodigoSeguridad'


export default function ConfigInicioSesion() {
    const [displayPasswordOrPin, setDisplayPasswordOrPin] = useState('PASSWORD'); // PASSWORD OR PIN

    return (
        <ContainerPrinc>
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    marginTop: "1.7rem",
                    justifyContent: "space-evenly",
                }}
            >                
               <MenuConfig />
               {
                displayPasswordOrPin === 'PASSWORD' 
                    ? <CambiarClave setChangeComponent={setDisplayPasswordOrPin} /> 
                    : <CodigoSeguridad setChangeComponent={setDisplayPasswordOrPin} />
               }               
            </div>
        </ContainerPrinc>
    );
}