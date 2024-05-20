import CounterContainer from "../../common/counter/CounterContainer"


const ItemDetail = ({agregarAlCarrito, producto}) => {
  return (
    <div>
        <h1>Producto: {producto.name}</h1>
        <h3>Precio: {producto.price}</h3>

        <CounterContainer agregarAlCarrito={agregarAlCarrito} stock={producto.stock} />
    </div>
  )
}

export default ItemDetail