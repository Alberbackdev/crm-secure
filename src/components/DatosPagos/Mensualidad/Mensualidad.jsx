import { useRouter } from "next/navigation";
import { useState } from "react";
import style from "./mensualidad.module.css";

function Mensualidad({ selectMeses }) {
  const router = useRouter();
  const [data, setData] = useState([]); 

  const monthsList = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

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
  
  
  return (
    <div className={style.container}>
      <h3 className={style.title}>Mensualidad</h3>

      <div className={style.boxes}>
        {monthsList.map((month, i) => (
          <div className={style.cardMensualidad} key={i}>
            <div className={style.cardMensualidad_top}>
              <div className={style.cardMensualidad_mes}>
                <h4>{month}</h4>
                <p>Recibimos Bs.D</p>
              </div>
              <input
                type="checkbox"
                name="mes"
                value={month}
                onChange={(event) =>  handleChange(event, month)}
              />
            </div>

            <input
              id={`inputMonth=${month}`}
              type="number"
              name="monto"
              placeholder="200"
              step=".01" 
              min="0"
              onChange={(event) =>  handleChange(event, month)}
              disabled={!data.some((meses) => meses?.mes === month)}
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