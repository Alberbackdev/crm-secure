"use client"

import { useRouter } from 'next/navigation';
import style from './mensualidad.module.css'
import { useState } from 'react';


function Mensualidad({ selectMeses }) {
  const router = useRouter();
  const [months, setMonths] = useState({});
  const [amounts, setAmounts] = useState({});

  selectMeses(months, amounts)
  
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
    const month = event.target.value;
    const amount = event.target.value;
    const updatedMonths = months.includes(month)
      ? months.filter((m) => m !== month)
      : [...months, month];
    const updatedAmounts = amounts.includes(amount)
      ? amounts.filter((a) => a !== amount)
      : [...amounts, amount];
    setMonths(updatedMonths);
    setAmounts(updatedAmounts);
  };

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
                type="checkbox"
                value={month}
                onChange={handleChange}
                
              />
            </div>

            <input
              type="number"
              placeholder="300.00"
              step=".01"
              onChange={handleChange}
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

export default Mensualidad