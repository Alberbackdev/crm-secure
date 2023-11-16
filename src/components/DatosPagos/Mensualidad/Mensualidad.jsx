import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import style from "./mensualidad.module.css";
import { useSelector } from "react-redux"

function Mensualidad({ selectMeses }) {
  const valuesPago = useSelector(state => state.pago); // state es el reducer y con el punto se accede al nombre se accede al slice

  const router = useRouter();
  const [data, setData] = useState(valuesPago.data.month_pay); // Los meses con monto traidos de la BD, sino por defecto un array vacio
  const [monthsList, setMonthsList] = useState([
    {nombreMes: "Enero", monto: ""},
    {nombreMes: "Febrero", monto: ""},
    {nombreMes: "Marzo", monto: ""},
    {nombreMes: "Abril", monto: ""},
  ])


  const handleChange = (event, month) => {
    const { name, value } = event.target;
    const isMonthInTheArray = name === 'mes' && data.find(mes => mes?.mes === value);

    if (isMonthInTheArray) { // Condicion para comprobar si seleccionan un mes dos veces, en caso de que si, removerlo.
      const removerMes = data.filter(mes => mes.mes !== value);
      selectMeses(removerMes);
      document.getElementById(`inputMonth=${month}`).value = ''; // resetar el input del monto.
      return setData(removerMes);
    } 
    if(name === 'mes') { // Condicion para agregar un mes
      return setData([...data, {mes: value, value: '0.00'}])
    }
    // Agregar monto a un mes.
    const putMontoAMes = data.map(mes => mes.mes === month ? ({...mes, value: value}) : mes);
    setData(putMontoAMes);
    selectMeses(putMontoAMes)
  };
  

  useEffect(() => {
    const dataTransformadaAGuardar = [];
    for (const elemento of monthsList) { // data = {mes: 'Enero', value: '200'}
      const comprobarMesPagado = data.find(month => month.mes === elemento.nombreMes);

      elemento.nombreMes === comprobarMesPagado?.mes 
        ? dataTransformadaAGuardar.push(({nombreMes: comprobarMesPagado.mes, monto: comprobarMesPagado.value})) 
        : dataTransformadaAGuardar.push(elemento) 
    }
    setMonthsList(dataTransformadaAGuardar)

  }, [])
  
  
  return (
    <div className={style.container}>
      <h3 className={style.title}>Mensualidad</h3>

      <div className={style.boxes}>
        {monthsList.map((month, i) => (
          <div className={style.cardMensualidad} key={i}>
            <div className={style.cardMensualidad_top}>
              <div className={style.cardMensualidad_mes}>
                <h4>{month.nombreMes}</h4>
                <p>Recibimos Bs.D</p>
              </div>
              <input
                type="checkbox"
                name="mes"
                checked={month.monto ? true : false}
                value={month.nombreMes}
                onChange={(event) =>  handleChange(event, month.nombreMes)}
              />
            </div>

            <input
              id={`inputMonth=${month}`}
              type="number"
              name="monto"
              placeholder="200"
              step=".01" 
              min="0"
              value={month.monto}
              onChange={(event) =>  handleChange(event, month.nombreMes)}
              disabled={!data.some((iteration) => iteration?.mes === month.nombreMes) || (month.monto && valuesPago.updatingPagoData) }
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        className={style.buttonBack}
        onClick={() => router.push("/clientes/poliza")}
      >
        Atras
      </button>
    </div>
  );
}

export default Mensualidad;