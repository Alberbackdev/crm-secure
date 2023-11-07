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

  const handleChange = (event) => {
    
    const { name, value } = event.target;
    
    if (name === "mes") {
      if (data.some((obj) => obj.mes === value)) {
        // Month already exists, remove it if deselected
        setData(data.filter((obj) => obj.mes !== value));
      } else {
        // Add the new month and amount
        const obj = { [name]: value };
        setData([...data, obj]);
      }
    }
      
    if (name == "monto") {
      const lastElement = data[data.length - 1];
      lastElement.value = parseFloat(value);
    }
    selectMeses(data);
  };
  
  console.log(data)
  
 

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
                onChange={handleChange}
              />
            </div>

            <input
              type="number"
              name="monto"
              placeholder="200"
              step=".01"
              min="0"
              onChange={handleChange}
              disabled={!data.some((obj) => obj.mes === month)}
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