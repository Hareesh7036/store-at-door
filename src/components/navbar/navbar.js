import React, { useState } from 'react'
import './navbar.css'
import { navItems } from './configuration';
import { Link,Routes,Route,HashRouter,Navigate } from 'react-router-dom';
import Home from './home';
import Categories from './categories';
import Wishlist from './wishlist';
import Cart from './cart';
import Login from './Login';


export const Navbar = () => {
    const [menu,setMenu]=useState(true);
    const handlemenu =()=>{
        setMenu(menu?false:true);
    }
    let timer;
    const debouncefn=()=>{
        
        console.log(timer);
        clearTimeout(timer);
        timer = setTimeout(()=>{
            return handleResize();  
        },300)

    }

    const handleResize= ()=>{
        if(window.innerWidth>450){
            console.log("changed");
            setMenu(true);
        }
    };
    window.addEventListener('resize',debouncefn);
    
  return (
    <div>
        <HashRouter>
        <div className='menu'>
        <button className='menu-btn' onClick={handlemenu}>Menu</button>
        </div>
        <ul className='nav-list' style={{marginTop:menu?'':-200}}>
            {
                navItems.map(({link_name,_link},ind)=>{
                    return <li key={`li_${ind}`}>
                        <Link to={_link}>{link_name}</Link>
                    </li>
                })
            }
        </ul>
        <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/wish-list" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        </Routes>
        </HashRouter>
    </div>
  )
}
