export const namePageHelper = () => {
    const {pathname  } = window.location;
    if(pathname === '/') return 'Bienvenido';
    if(pathname.includes('clientes')) return 'Clientes';
    if(pathname.includes('dashboard')) return 'Dashboard';
    if(pathname.includes('ventas')) return 'Ventas';
}