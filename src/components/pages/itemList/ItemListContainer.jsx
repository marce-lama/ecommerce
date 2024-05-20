import { useEffect, useState } from "react"
import ItemList from "./ItemList"

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [edad, setEdad] = useState(20)

  //VARIANTE 1 
  //{useEffect(() => {
  //console.log("Llamado a la API")
  //}, [])}

  // VARIANTE 2 
  useEffect(()=> {
    console.log("Llamado a la API")
  }, [edad])

  console.log(productos)

  return (
    <ItemList edad={edad} setEdad={setEdad} productos={productos} setProductos={setProductos}/>
  )
}

export default ItemListContainer