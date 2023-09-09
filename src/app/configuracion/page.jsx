'use client';
import PreferenciasPersonales from "@/src/components/Ajustes/PreferenciasPersonales/PreferenciasPersonales"
import ContainerPrinc from "../../components/LayoutFolder/Layout";
import MenuConfig from "@/src/components/MenuConfiguracion/MenuConfig"



export default function Configuracion() {
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
               <PreferenciasPersonales />
            </div>
        </ContainerPrinc>
    );
}