"use client"
// plantilla dentro del cuadro blanco
import style from "./layout.module.css";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import MobileDesign from "../Sidebar/MobileDesign"
import dynamic from "next/dynamic";

const useScreenSize = dynamic(() => import("@/src/utils/useWidthScreen"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

//children es el nombre de la pagina que esta accediedo
export default function ContainerPrinc({ children }) {
  const { width } = useScreenSize();
  const isMobile = width <= 816;

  return (
    <div className={style.container}>
      <div className={style.contentPlantilla}>
        {" "}
        {/* Sidebar DESKTOP AND MOBILE */}
        {isMobile ? <MobileDesign /> : <Sidebar />}
        <Sidebar />
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
