import ItemList from "./ItemList"

const ItemListContainer = ({saludo}) => {
    let apellido = "Perez"

  return (
    <ItemList apellido={apellido} saludo={saludo}/>
  )
}

export default ItemListContainer