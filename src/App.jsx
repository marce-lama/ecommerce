import { useState } from "react"
import Navbar from "./components/layout/navbar/Navbar"
import ItemListContainer from "./components/pages/itemList/ItemListContainer"
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer"

function App() {

  const [mostrarComponentes, setMostrarComponentes] = useState(false)

  return (
  <div>
    <Navbar />
    <button onClick={()=>setMostrarComponentes(!mostrarComponentes)}>Mostrar Componente</button>

    {mostrarComponentes ? <ItemListContainer /> : null}
    
    <ItemDetailContainer />
    
  </div>
  )
}

export default App
