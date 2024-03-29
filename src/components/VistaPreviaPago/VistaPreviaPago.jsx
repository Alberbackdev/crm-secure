"use client";
import { usePathname } from "next/navigation";
import style from "./vistaPreviaPago.module.css";
import Image from "next/image";
import { useSelector } from "react-redux";

function VistaPreviaPago() {
  const allBeneficiarios = useSelector((state) => state.beneficiario.data);
  const valuesClient = useSelector((state) => state.client.data);
  const valuesPoliza = useSelector((state) => state.poliza.data);
  const valuesPago = useSelector((state) => state.pago.data);
  const pathname = usePathname();
  const isFacturaPage = pathname === "/facturas/cliente";
  const fechaActual = new Date();
  const fechaNAci = new Date(valuesClient.dateofbirth);
  const edadActual = fechaActual.getFullYear() - fechaNAci.getFullYear();
  console.log(edadActual)

  return (
    <div className={style.container}>
      <div className={style.successMessage}>
        {!isFacturaPage && (
          <div className={style.circleContent}>
            <Image
              priority
              src="/successIcon.png"
              height={20}
              width={20}
              alt="Follow us on Twitter"
            />
          </div>
        )}
        <div>
          <p className={style.blueMessage}>
            Tu Registro ha Finalizado con Exito!
          </p>
          <p className={style.grayMessage}>
            Los datos ingresados han sido registrados correctamente!
          </p>
        </div>
      </div>
      <div className={style.content_codigoSeguro}>
        <p className={style.titleInfo}>Codigo del Seguro: </p>
        <p className={style.codigoSeguro}>
          {!valuesPoliza.codigoPoliza ? "undefined" : valuesPoliza.codigoPoliza}
        </p>
      </div>

      <div className={style.detallesCliente}>
        <p className={style.title_detallesCliente}>
          Detalles del Registro Cliente
        </p>
        <p className={style.titleInfo}>Datos del Cliente</p>

        <div className={style.dataCliente}>
          <div className={style.field}>
            <p className={style.title_field}>Nombres Y Apellidos</p>
            <p className={style.data_field}>
              {!valuesClient.name && valuesClient.lastname
                ? "esta vacío"
                : valuesClient.name + " " + valuesClient.lastname}
            </p>
          </div>
          <div className={style.field}>
            <p className={`${style.title_field} ${style.cedulaResponsive}`}>
              Cedula de Identidad
            </p>
            <p className={`${style.data_field} ${style.right}`}>
              {!valuesClient.cidentified
                ? "undefined"
                : valuesClient.cidentified}
            </p>
          </div>
        </div>
        <div className={style.dataCliente}>
          <div className={style.field}>
            <p className={style.title_field}>Numero de Telefono</p>
            <p className={style.data_field}>
              {!valuesClient.phone ? "undefined" : valuesClient.phone}
            </p>
          </div>
          {/* <div className={style.field}>
            <p className={`${style.title_field} ${style.right}`}>Edad</p>
            <p className={`${style.data_field} ${style.right}`}>{edadActual == NaN ? "0": edadActual}</p>
          </div> */}
        </div>
      </div>

      <div className={style.detallesPoliza}>
        <p className={style.titleInfo}>Datos de la Poliza</p>

        <div className={style.dataPoliza}>
          <div className={style.field}>
            <p className={style.title_field}>Nombre del Cobrador/Vendedor</p>
            <p className={style.data_field}>
              {!valuesPoliza.seller ? "undefined" : valuesPoliza.seller}
            </p>
          </div>
          <div className={style.field}>
            <p className={style.title_field}>Ciudad</p>
            <p className={style.data_field}>
              {!valuesPoliza.city_contract
                ? "undefined"
                : valuesPoliza.city_contract}
            </p>
          </div>
        </div>
        <div className={style.dataPoliza}>
          <div className={style.field}>
            <p className={style.title_field}>Fecha de Contrato</p>
            <p className={style.data_field}>
              {!valuesPoliza.dateofcontract ? "undefined" : valuesPoliza.dateofcontract}
            </p>
          </div>
          <div className={style.field}>
            <p className={`${style.title_field}`}>N° Beneficiarios</p>
            <p className={`${style.data_field} ${style.right}`}>{allBeneficiarios.length}</p>
          </div>
        </div>
      </div>

      <div className={`${style.contentBeneficiarios} ${isFacturaPage ? style.separateTop : ''}`}>
        <p className={style.titleInfo}>Lista de Beneficiarios</p>
        <div
          className={`${style.listaBeneficiarios} ${
            isFacturaPage ? style.heightAuto : ""
          }`}
        >
          {allBeneficiarios.map(beneficiario => (
            <div className={style.row} key={beneficiario.cidentified_payee}>
            <div className={style.row_content}>
              <p>Datos</p>
              <p>{beneficiario.name_payee}</p>
            </div>
            <div className={style.row_content}>
              <p>Fecha de Nacimiento</p>
              <p>{beneficiario.dateofbirth}</p>
            </div>
            <div className={style.row_content}>
              <p>Cedula</p>
              <p>{beneficiario.cidentified_payee}</p>
            </div>
            <div className={style.row_content}>
              <p>Edad</p>
              <p>{beneficiario.age_payee}</p>
            </div>
          </div>
          ))}
          
        </div>
      </div>
    </div>
  );
}

export default VistaPreviaPago;
