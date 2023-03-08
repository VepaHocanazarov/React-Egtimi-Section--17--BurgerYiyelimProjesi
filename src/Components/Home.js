import React from 'react';
import { Link } from "react-router-dom";
import BannerImage from "../Images/banneryeni.jpg";
import "../Styles/Home.css";


export const Home = () => {
  return (
    <div className='mainPage' style={{backgroundImage:`url(${BannerImage})`}}>
      <div className='order'>
        <Link to="/menu">
          <button>SİPARİŞ VER</button>
        </Link>
      </div>
    </div>
  )
}
