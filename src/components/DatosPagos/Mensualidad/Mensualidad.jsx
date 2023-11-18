import { useRouter } from "next/navigation";
import { useEffect } from "react";
import style from "./mensualidad.module.css";
import { useDispatch, useSelector } from "react-redux"
import { putOrRemovePriceToMonth } from "@/src/redux/slices/pagoReducer"

function Mensualidad() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { updatingPagoData, monthsList, data } = useSelector(state => state.pago); // state es el reducer y con el punto se accede al nombre se accede al slice

  const handleChange = (event, nameMonth) => {
    const { name: input, value } = event.target;
    const monto = input === 'mes' ? "" : value;
    const isCheckedInput = document.getElementById(`inputCheck=${nameMonth}`);
    isCheckedInput.checked 
      ? document.getElementById(`inputMonto=${nameMonth}`).disabled = false
      : document.getElementById(`inputMonto=${nameMonth}`).disabled = true
    dispatch( putOrRemovePriceToMonth({ nameMonth, monto }) );
  }

  useEffect(() => {
    for (const elemento of monthsList) {
      if(elemento.monto && updatingPagoData)  {
        document.getElementById(`inputCheck=${elemento.nombreMes}`).checked = true; 
        document.getElementById(`inputCheck=${elemento.nombreMes}`).disabled = true; 
        document.getElementById(`inputMonto=${elemento.nombreMes}`).disabled = true; 
      } else {
        document.getElementById(`inputMonto=${elemento.nombreMes}`).disabled = true; 
      }
    }
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
                id={`inputCheck=${month.nombreMes}`}
                value={month.nombreMes}
                onChange={(event) => handleChange(event, month.nombreMes)}
              />
            </div>

            <input
              type="number"
              name="monto"
              placeholder="200"
              step=".01"
              min="0"
              id={`inputMonto=${month.nombreMes}`}
              value={month.monto}
              onChange={(event) =>  handleChange(event, month.nombreMes)}
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
