'use client';
import MenuConfig from "@/src/components/MenuConfiguracion/MenuConfig"
import ContainerPrinc from "@/src/components/LayoutFolder/Layout"
import Notificaciones from "@/src/components/Ajustes/Notificaciones/Notificaciones"


export default function NotificationsPage() {

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
               <Notificaciones />
            </div>
        </ContainerPrinc>
    );
}