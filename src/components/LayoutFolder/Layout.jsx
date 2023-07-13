// plantilla dentro del cuadro blanco

import Nav from "../Sidebar/Sidebar";
import style from "./layout.module.css";
import Header from "../Header/Header";

//children es el nombre de la pagina que esta accediedo
export default function ContainerPrinc({ children }) {
  return (
    <div className={style.container}>
      <div className={style.contentPlantilla}>
        {" "}
        {/* Sidebar */}
        <Nav />
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
