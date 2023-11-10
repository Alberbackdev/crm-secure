'use client'
import { useEffect } from 'react'
import CardRightDatosVentas from '@/src/components/CardRightDatosVentas/CardRightDatosVentas'
import VistaPreviaVentas from '@/src/components/VistaPreviaVentas/VistaPreviaVentas'
import style from '@/src/styles/stylePages.module.css'
import { useRouter } from 'next/navigation'


function FacturaVenta() {
    const router = useRouter();

    useEffect(() => {
        window.print();
        router.push('/ventas');
    }, [])
    

    return (
      <>
        <div className={style.facturaPage}>        
            <VistaPreviaVentas />
            <CardRightDatosVentas />
        </div>
      </>      
    );
}

export default FacturaVenta