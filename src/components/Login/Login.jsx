"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import style from "./login.module.css";
import Link from "next/link";

export default function Login() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (res?.error) return setError(res.error);

    if (res?.ok) return router.push("/dashboard");
  };

  return (
    <div className={style.container}>
      <h2>Inicio de Sesión</h2>
      <form onSubmit={handleSubmit} className={style.formLogin}>
        {error && <div className="bg-red-500 text-white p-2 mb-2">{error}</div>}
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

        <button className={style.buttonLogin}>Ingresar</button>
      </form>
      <Link
        href="/register"
        className="flex gap-1 p-1 bg-white text-blue-900 rounded-lg"
      >       
        Registrarse
      </Link>
      <p className={style.forgotPassword}>¿Has olvidado tu contraseña?</p>
    </div>
  );
}
