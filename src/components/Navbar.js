import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./NavbarStyle.css";
import { FaBars, FaTimes} from "react-icons/fa"
const Navbar = () => {
    const [click, setClick] = useState(false);
    const handeleClick = () => setClick(!click);
    const [color , setcolor] = useState(false);
    function changeColor(){
        if(window.scrollY > 100){
            setcolor(true)
        }else{
            setcolor(false)
        }
    }
    window.addEventListener("scroll" , changeColor)
  return (
    <div className={color ? ("header header-bg"):("header")}>
        <Link to="/">
            <h1>Portfolio</h1>
        </Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
                <Link to="/">Home</Link>
            </li>

            <li>
                <Link to="/Project">Project</Link>
            </li>

            <li>
                <Link to="/Contact">Contact</Link>
            </li>
            <li>
                <Link to="/About">About</Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handeleClick}>
            {click ? (<FaTimes size={20} style={{color: "#fff"}} />
            ): ( <FaBars size={20} style={{color: "#fff"}} />)}
           
        </div>
    </div>
  )
}

export default Navbar