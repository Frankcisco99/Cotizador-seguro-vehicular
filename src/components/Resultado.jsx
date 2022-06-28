import {useCallback, useRef}from 'react'
import { MARCAS, YEARS, PLANES } from '../constants'
import useCotizador from '../hooks/useCotizador'
const Resultado = () => {
    const {resultado, datos} = useCotizador()
    const {marca, plan , year} = datos
    const yearRef = useRef(year)
    const [nombreMarca] = useCallback( MARCAS.filter(m => m.id === Number(marca)),[resultado])
    const [nombrePlan] = useCallback( PLANES.filter(p => p.id === Number(plan)),[resultado])
    console.log(nombrePlan)
    if(resultado === 0) return null
  return (
    <div className='bg-gray-100 mt-5 p-5 text-center shadow'>
        <h2 className='text-gray-600 font-black text-3xl'>Resumen</h2>
        <p className='my-2'><span className='font-bold'>Marca: </span>{nombreMarca.nombre}</p>    
        <p className='my-2'><span className='font-bold'>Plan: </span>{nombrePlan.nombre}</p>    
        <p className='my-2'><span className='font-bold'>Año Vehiculo: </span>{yearRef.current}</p>    
        <p className='my-2 text-2xl'><span className='font-bold'>Total Cotización: </span>{resultado}</p>    
    </div>
  )
}

export default Resultado