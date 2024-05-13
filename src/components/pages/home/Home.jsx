
const Home = ({nombre, edad, contador, setContador, userName, setUserName}) => {

  return (
    <div style={{padding: "0 20px"}}>
        <div>
          Nombre: {nombre}
        </div>
        <div>
          Edad: {edad}
        </div>
        <div>
          <button onClick={()=> setContador(contador +1)}>+</button>
          <h3>{contador}</h3>
          <button onClick={()=> setContador(contador -1)}>-</button>
          <h3>{userName}</h3>
          <button onClick={()=>setUserName("Juanito")}>Cambiar Nombre</button>
        </div>

    </div>
  )
}

export default Home