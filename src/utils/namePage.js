// import { useParams, usePathname } from "next/navigation";

export const NamePageHelper = (pathname) => {
    // const params = useParams()
    if(pathname === '/') return 'Bienvenido';
    if(pathname.includes('clientes')) return 'Clientes';
    if(pathname.includes('dashboard')) return 'Dashboard';
    if(pathname.includes('ventas')) return 'Ventas';
    if (pathname.includes('configuracion')) return 'Ajustes';
    if (pathname === '/login') return 'Inicio de Sesión';
    if (pathname === '/register') return 'Registrate';
}