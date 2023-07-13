"use client"
import style from './login.module.css';
import { useRouter } from 'next/router'


function Login() {
  const router = useRouter();

    const onLogin = () => {
        // codigo de login
        //luego redigir a la pagina principal
        router.push('/clientes')
    }

  return (
    <div className={style.container}>
        <h2>Inicio de Sesión</h2>
        <form className={style.formLogin}>
            <input type='text' placeholder='Ingrese el usuario'/>
            <input type='password' placeholder='Contraseña'/>

            <button type='button' onClick={onLogin} className={style.buttonLogin}>Ingresar</button>
        </form>
        <p className={style.forgotPassword}>¿Has olvidado tu contraseña?</p>
    </div>
  )
}

export default Login