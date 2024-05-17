
const ItemList = ({edad, setEdad, productos, setProductos}) => {
  return (
    <div>
        <h1>Aca van los Items</h1>
        <h2>{edad}</h2>
        <button onClick={()=> setEdad(edad + 1)}>Incrementar Edad</button>
        <button onClick={()=> setProductos([...productos, {}])}>Agregar producto</button>
    </div>
  )
}

export default ItemList