'use client'
import CardRightDatosPagos from '@/src/components/CardRightDatosPagos/CardRightDatosPagos'
import VistaPreviaPago from '@/src/components/VistaPreviaPago/VistaPreviaPago'
import style from '@/src/styles/stylePages.module.css'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'


function FacturaCliente() {
    const router = useRouter();

    useEffect(() => {
        window.print();
        router.push('/clientes')    
    }, [])
    

    return (
      <>
        <div className={style.facturaPage}>        
          <VistaPreviaPago />
          <CardRightDatosPagos />
        </div>
      </>      
    );
}

export default FacturaCliente