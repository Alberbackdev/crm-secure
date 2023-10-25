import style from './BarSearchMobile.module.css'

function BarSearchMobile() {
  return (
    <div className={style.barSearch}>
        <input type="text" placeholder='Ingrese Código poliza o Cédula' />
        <button>Buscar</button>
    </div>
  )
}

export default BarSearchMobile