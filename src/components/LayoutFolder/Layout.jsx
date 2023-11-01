// plantilla dentro del cuadro blanco
"use client"
import style from "./layout.module.css";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import MobileDesign from "../Sidebar/MobileDesign"
//import { useScreenSize } from "@/src/utils/useWidthScreen"

//children es el nombre de la pagina que esta accediedo
export default function ContainerPrinc({ children }) {
  //const { width } = useScreenSize();
  //const isMobile = width <= 816;

  return (
    <div className={style.container}>
      <div className={style.contentPlantilla}>
        {" "}
        {/* Sidebar DESKTOP AND MOBILE */}
        {/* {isMobile ? <MobileDesign /> : <Sidebar />} */}
      </div>
      <div className={style.children}>
        {" "}
        {/* Header y Children */}
        <Header />
        {children}
      </div>
    </div>
  );
}
