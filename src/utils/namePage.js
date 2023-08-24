import { useParams, usePathname } from "next/navigation";

export const NamePageHelper = () => {
    const pathname = usePathname();
    const params = useParams()
    if(pathname === '/') return 'Bienvenido';
    if(pathname.includes('clientes')) return 'Clientes';
    if(pathname.includes('dashboard')) return 'Dashboard';
    if(pathname.includes('ventas')) return 'Ventas';
    if (pathname === '/profile') return 'Ajustes';
    if (pathname === '/login') return 'Inicio de Sesión';
    if (pathname === '/register') return 'Registrate';
}