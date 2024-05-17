import { useState } from "react"
import Navbar from "./components/layout/navbar/Navbar"
import ItemListContainer from "./components/pages/itemList/ItemListContainer"

function App() {

  const [mostrarComponentes, setMostrarComponentes] = useState(false)

  return (
  <div>
    <Navbar />

    {mostrarComponentes ? <ItemListContainer /> : null}
    
    <button onClick={()=>setMostrarComponentes(!mostrarComponentes)}>Mostrar Componente</button>
    
  </div>
  )
}

export default App
