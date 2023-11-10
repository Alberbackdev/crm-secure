'use client';
import {useState} from 'react'
import MenuConfig from "@/src/components/MenuConfiguracion/MenuConfig"
import CambiarClave from "@/src/components/Ajustes/CambiarClave/CambiarClave"
import ContainerPrinc from "@/src/components/LayoutFolder/Layout"
import CodigoSeguridad from '@/src/components/Ajustes/CodigoSeguridad/CodigoSeguridad'
import style from '@/src/styles/stylePages.module.css'

export default function ConfigInicioSesion() {
    const [displayPasswordOrPin, setDisplayPasswordOrPin] = useState('PASSWORD'); // PASSWORD OR PIN

    return (
        <ContainerPrinc>
            <div className={style.pageClaveConfig}>                
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