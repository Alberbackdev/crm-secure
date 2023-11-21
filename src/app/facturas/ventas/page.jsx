'use client'
import { useEffect } from 'react'
import CardRightDatosVentas from '@/src/components/CardRightDatosVentas/CardRightDatosVentas'
import VistaPreviaVentas from '@/src/components/VistaPreviaVentas/VistaPreviaVentas'
import style from '@/src/styles/stylePages.module.css'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { resetDifuntoSlice } from '@/src/redux/slices/ventasSlice/difuntoReducer'
import { resetResponsableSlice } from '@/src/redux/slices/ventasSlice/responsableReducer'
import { resetServicioSlice } from '@/src/redux/slices/ventasSlice/servicioReducer'


function FacturaVenta() {
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        window.print();
        dispatch(resetDifuntoSlice());
        dispatch(resetResponsableSlice());
        dispatch(resetServicioSlice());
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