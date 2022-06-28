import Formulario from "./Formulario"
import useCotizador from "../hooks/useCotizador"
import Cargando from "./Cargando"
import Resultado from "./Resultado"
const AppSeguro = () => {
  const {resultado, cargando, setCargando} = useCotizador()
  return (
    <>
        <header className="my-10">
            <h1 className="text-center text-white text-4xl font-black">Cotizador de Seguros de Automoviles</h1>
        </header>
        <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
            <Formulario/>
            {cargando? <Cargando/> : <Resultado/>}
        </main>
    </>
  )
}

export default AppSeguro