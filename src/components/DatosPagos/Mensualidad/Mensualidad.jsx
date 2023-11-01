"use client";

import { useRouter } from "next/navigation";
import style from "./mensualidad.module.css";
import { useState } from "react";

function Mensualidad({ selectMeses }) {
  const router = useRouter();
  const [months, setMonths] = useState([]);
  const [amounts, setAmounts] = useState([]);


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

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "month") {
      if (months.includes(value)) {
        setMonths(months.filter((month) => month !== value));
      } else {
        setMonths([...months, value]);
      }
    }
    
    if (name === "amount") {
      setAmounts(value);
    }
  };

  console.log(amounts);
  const amountObjects = months.map((month) => ({
    month,
    amount: amounts[month],
  }));
  //amountObjects.sort((a, b) => a.month.localeCompare(b.month));

  console.log(amountObjects)

  return (
    <div className={style.container}>
      <h3 className={style.title}>Mensualidad</h3>

      <div className={style.boxes}>
        {monthsList.map((month, index) => (
          <div className={style.cardMensualidad} key={index}>
            <div className={style.cardMensualidad_top}>
              <div className={style.cardMensualidad_mes}>
                <h4>{month}</h4>
                <p>Recibimos Bs.</p>
              </div>
              <input
                name="month"
                type="checkbox"
                value={month}
                onChange={handleChange}
              />
            </div>

            <input
              name="amount"
              type="number"
              placeholder="300.00"
              step=".01"
              value={amounts[month]}
              onChange={handleChange}
              min="0"
            />
          </div>
        ))}
        <p>Meses seleccionados: {months.join(", ")}</p>
      </div>
      {/* <div>
          <h1>Meses del año</h1>
          <ul>
            {monthsList.map((month, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  value={month}
                  onChange={handleChange}
                  checked={months.includes(month)}
                />
                {month}
              </li>
            ))}
          </ul>
          <p>Meses seleccionados: {months.join(", ")}</p>
        </div> */}

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
