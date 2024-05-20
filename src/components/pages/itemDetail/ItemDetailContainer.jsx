import { useState } from "react"
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {

  const [producto, setProducto] = useState({id: 1, name:"Celular", price: 300, stock: 5})

  const agregarAlCarrito = (cantidad) =>{
    let data = {
      ...producto, 
      quantity: cantidad
    }
    console.log(data)
  }

  return (
    <ItemDetail agregarAlCarrito={agregarAlCarrito} producto={producto}/>
  )
}

export default ItemDetailContainer