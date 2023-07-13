// import Layout from "../components/LayoutFolder/Layout"
import Login from "../components/Login/Login"
import style from '../styles/loginPage.module.css'

export default function Home() {
  return (
      <div className={style.content}>
        <Login />
        <div className={style.pageLogin}></div>
      </div>  
  )
}
