import { useState } from "react"
import ItemList from "./ItemList"

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [edad, setEdad] = useState(20)
  console.log("Se monto o se actualizo")

  return (
    <ItemList edad={edad} setEdad={setEdad} productos={productos} setProductos={setProductos}/>
  )
}

export default ItemListContainer