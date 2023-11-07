'use client';
import PreferenciasPersonales from "@/src/components/Ajustes/PreferenciasPersonales/PreferenciasPersonales"
import ContainerPrinc from "../../components/LayoutFolder/Layout";
import MenuConfig from "@/src/components/MenuConfiguracion/MenuConfig"
import style from '@/src/styles/stylePages.module.css'

export default function Configuracion() {

    return (
        <ContainerPrinc>
            <div className={style.configPage}>
               <MenuConfig />
               <PreferenciasPersonales />
            </div>
        </ContainerPrinc>
    );
}