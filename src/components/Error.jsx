import React from 'react'
import useCotizador from '../hooks/useCotizador'
const Error = () => {
    const {error} = useCotizador()
  return (
    <p className="bg-red-200 border border-red-400 text-red-500 p-3 text-center font-bold text-lg">{error}</p>
  )
}

export default Error