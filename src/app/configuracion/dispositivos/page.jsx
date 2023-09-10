'use client';
import MenuConfig from "@/src/components/MenuConfiguracion/MenuConfig"
import DispositivosActivos from "@/src/components/Ajustes/DispositivosActivos/DispositivosActivos"
import ContainerPrinc from "@/src/components/LayoutFolder/Layout"


export default function Dispositivos() {

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
               <DispositivosActivos />
            </div>
        </ContainerPrinc>
    );
}