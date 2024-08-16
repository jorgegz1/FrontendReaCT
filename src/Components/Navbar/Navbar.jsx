import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown.png'

const Navbar = () => {


    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) =>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>FerreOnline</p>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
        <ul  ref={menuRef} className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Tienda</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("electrónico")}}><Link style={{textDecoration: 'none'}} to='/electrónico'>Electrónico</Link>{menu==="electrónico"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("construcción")}}><Link style={{textDecoration: 'none'}} to='/construcción'>Construcción</Link>{menu==="construcción"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("pintura")}}><Link style={{textDecoration: 'none'}} to='/pintura'>Pintura</Link>{menu==="pintura"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <button><Link style={{textDecoration: 'none'}} to='/login'>Login</Link></button>
            <Link style={{textDecoration: 'none'}} to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
)
}

export default Navbar
