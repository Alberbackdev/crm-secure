'use client';
import { useRouter } from "next/navigation";

//Vista Principal
export default function HomePage() {
  const router = useRouter()
  return (
    <>
      <h1>Sesión Iniciada</h1>
      <button type="button" className="btn-primary" onClick={() => router.push('/dashboard')}>
        Haz clic para entrar
      </button>
    </>
  );
}
