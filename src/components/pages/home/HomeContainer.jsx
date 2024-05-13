import { useState } from "react"
import Home from "./Home"


const HomeContainer = ({nombre, edad}) => {
    const [contador, setContador] = useState(0)
    const [userName, setUserName] = useState("Pepe")
  return (
    <Home contador={contador} setContador={setContador} userName={userName} setUserName={setUserName} nombre={nombre} edad={edad} />
    )
}

export default HomeContainer