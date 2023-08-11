"use client";
import { useState } from "react";
import style from "../Login/login.module.css";
import axios, { AxiosError } from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link"


function Register() {
  const [error, setError] = useState();
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const signupResponse = await axios.post("/api/auth/signup", {
        email: formData.get("email"),
        password: formData.get("password"),
        fullname: formData.get("fullname"),
      });
      console.log(signupResponse);
      const res = await signIn("credentials", {
        email: signupResponse.data.email,
        password: formData.get("password"),
        redirect: false,
      });

      if (res?.ok) return router.push("/dashboard");
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data.message;
        setError(errorMessage);
      }
    }
  };

  return (
    <div className={style.container}>
      <h2>Registrarse</h2>
      <form onSubmit={handleSubmit} className={style.formLogin}>
        {error && 
            <div className="bg-red-500 text-white p-2 mb-2">{error}</div>
        }
        <input
          type="text"
          placeholder="Nombre Completo"
          name="fullname"
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          name="email"
        />
        <input
          type="password"
          placeholder="Contraseña"
          name="password"
        />

        <button className={style.buttonLogin} type="submit">Registrarse</button>
      </form>
      <Link
        href="/login"
        className={style.forgotPassword}
      >       
        Iniciar Sesión
      </Link>
    </div>
  )
}

export default Register