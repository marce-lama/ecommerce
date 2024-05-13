import Navbar from "./components/layout/navbar/Navbar"
import HomeContainer from "./components/pages/home/HomeContainer"
import ItemListContainer from "./components/pages/itemList/ItemListContainer"

function App() {

  let nombre = "Marcelo"
  let edad = 10

  const saludo = "Hola! Como estas? Espero que muy bien!"

  return (
  <div>
    <Navbar />
    <HomeContainer nombre={nombre} edad={edad}/>
    <ItemListContainer saludo={saludo}/>
  </div>
  )
}

export default App
