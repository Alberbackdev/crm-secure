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
      <form onSubmit={handleSubmit} className={style.formLogin}>
        {error && <div className="bg-red-500 text-white p-2 mb-2">{error}</div>}
        <h1 className="text-4xl font-bold mb-7">Inicio de Sesion</h1>

        <label className="text-slate-300">Email:</label>
        <input
          type="email"
          placeholder="Email"
          className="bg-zinc-800 px-4 py-2 block mb-2 w-full"
          name="email"
        />

        <label className="text-slate-300">Password:</label>
        <input
          type="password"
          placeholder="Password"
          className="bg-zinc-800 px-4 py-2 block mb-2 w-full"
          name="password"
        />

        <button className={style.buttonLogin}>Ingresar</button>
      </form>
      <Link
        href="/register"
        className="flex gap-1 p-1 bg-white text-blue-900 rounded-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
        Register
      </Link>
      <p className={style.forgotPassword}>¿Has olvidado tu contraseña?</p>
    </div>
  );
}
