import './navbar.css'
import { TiShoppingCart } from "react-icons/ti";
import { MdOutlineShoppingBag } from "react-icons/md";
import { LuMoon } from "react-icons/lu";
import { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoSunnyOutline } from "react-icons/io5";

const Navbar = ({isDark , dark , cartItems}) => {



  return (
    <Fragment>
    <div className='navbar'>
      <div className="nav-left">
      <TiShoppingCart className='cart-icon'/>
      </div>
      <div className="nav-middle">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="nav-right">
        {dark ?  <IoSunnyOutline className='sun-icon' onClick={isDark}/>
         :  <LuMoon className='moon-icon' onClick={isDark}/>
         }
       <Link to='/cart'>
       <MdOutlineShoppingBag className='bag-icon'/>
       </Link>
        <span>{cartItems.length}</span>
      </div>
    </div>
    <hr />
    </Fragment>
  )
}

export default Navbar
