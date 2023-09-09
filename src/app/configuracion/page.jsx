'use client';
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
               <h3>Lobero</h3>
            </div>
        </ContainerPrinc>
    );
}