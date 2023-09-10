'use client';
import MenuConfig from "@/src/components/MenuConfiguracion/MenuConfig"
import CambiarClave from "@/src/components/Ajustes/CambiarClave/CambiarClave"
import ContainerPrinc from "@/src/components/LayoutFolder/Layout"



export default function ConfigInicioSesion() {
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
               <CambiarClave />
            </div>
        </ContainerPrinc>
    );
}