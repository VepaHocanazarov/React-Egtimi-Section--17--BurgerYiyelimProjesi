import React from 'react';
import BurgerLogo from "../Images/burgerlogo.png";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css"

export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='main '>
                <img src={BurgerLogo} alt="" />

                <div className='mainLink'>
                    <Link to="/">Anasyafa</Link>
                    <Link to="/menu">Menü</Link>
                    <Link to="/about">Hakkımızda</Link>
                    <Link to="/contact">Iletişim</Link>

                </div>
            </div>
        </div>
    )
}
