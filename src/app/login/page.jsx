import style from "@/src/styles/loginPage.module.css";
import Login from "@/src/components/Login/Login";

export default function page() {
  return (
    <div className={style.content}>
      <Login />
      <div className={style.pageLogin}></div>
    </div>
  );
}
