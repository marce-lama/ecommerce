
import style from "./Home.module.css"

export const Home = () => {

  let edad = 30; 

  return (
    <div>
      <div className={`${style.tittle} ${style.fondo}`} >Home</div>
      <div><h3>Edad: {edad}</h3></div>
    </div>
  )
}
