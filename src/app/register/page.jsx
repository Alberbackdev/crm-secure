import style from "@/src/styles/loginPage.module.css";
import Register from "@/src/components/Register/Register";


function RegisterPage() {

  return (
    <div className={style.content}>
      <Register />
      <div className={style.backgroundImage}></div>
    </div>
  );
}

export default RegisterPage;
