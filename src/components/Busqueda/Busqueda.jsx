import { useState } from 'react'
import style from './busqueda.module.css'

function Busqueda() {
  const [valorBusqueda,setValorBusqueda] = useState('');


  return (
    <div className={style.container}>
       <input type="text" placeholder='Busqueda por cédula' value={valorBusqueda} onChange={({target}) => setValorBusqueda(target.value)} />
       <button>Buscar</button>
    </div>
  )
}

export default Busqueda