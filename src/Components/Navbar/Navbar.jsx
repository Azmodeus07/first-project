import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems}= useContext(ShopContext);
    const menuRef = useRef();

  return (
    <div className='navbar'>
        <div className="nav-logo">
        <Link style={{textDecoration:'none'}} to='/'><img onClick={()=>{setMenu("shop")}} src={logo} alt=""/></Link>
        <Link style={{textDecoration:'none'}} to='/'><p onClick={()=>{setMenu("shop")}}>Tech Trends Closet </p></Link>
        </div>
        <img src="" alt="" />
        <ul ref={menuRef} className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("tech")}}><Link style={{textDecoration:'none'}} to='/tech'>Kid</Link>{menu==="tech"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration:'none'}}  to='/men'>Men</Link>{menu==="men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration:'none'}}  to='/women'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("about")}}><Link style={{textDecoration:'none'}}  to='/about'>About</Link>{menu==="about"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link onClick={()=>{setMenu("")}} to='/login'><button>Login</button></Link>
            <Link onClick={()=>{setMenu("")}} to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar