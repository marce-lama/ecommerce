import CartWidget from "../../common/cartWidget/CartWidget"
import "./Navbar.css"


const Navbar = () => {
  return (
    <div className="navContainer">
        <h4>Logo</h4>
        <ul className="containerCategories">
            <li>Inicio</li>
            <li>Contacto</li>
            <li>About</li>
        </ul>
        <CartWidget />
    </div>
  )
}

export default Navbar