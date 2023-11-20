'use client';
import CardRightDatosPagos from '@/src/components/CardRightDatosPagos/CardRightDatosPagos'
import VistaPreviaPago from '@/src/components/VistaPreviaPago/VistaPreviaPago'
import { resetBeneficiarioSlice } from '@/src/redux/slices/beneficiarioReducer'
import { resetClientSlice } from '@/src/redux/slices/clientReducer'
import { resetPagoSlice } from '@/src/redux/slices/pagoReducer'
import { resetPolizaSlice } from '@/src/redux/slices/polizaReducer'
import style from '@/src/styles/stylePages.module.css'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'


function FacturaCliente() {
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        window.print();
        dispatch(resetClientSlice());
        dispatch(resetPolizaSlice());
        dispatch(resetPagoSlice());
        dispatch(resetBeneficiarioSlice());
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