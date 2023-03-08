import React from 'react';
import BannerImage from "../Images/banner.png";
import "../Styles/Contact.css"



export const Contact = () => {
  return (
    <div className='contact'>

      <div className="leftSide" style={{ backgroundImage: `url(${BannerImage})` }}></div>


      <div className="rightSide">
        <h1 className='contactTitle'>Bizimle İletişime Geçin</h1>
        <form>
          <label >Ad Soyad</label>
          <input type="text" name='name' placeholder='Lütfen Adınızı Soaydınızı Giriniz...' />

          <label >Email</label>
          <input type="email" name='email' placeholder='Lütfen Emailinizi Giriniz...' />

          <label >Mesajınız</label>
          <textarea name='message' rows={6} placeholder='Lütfen Adınızı Soaydınızı Giriniz...'></textarea>
          
          <button>Gönder</button>
        </form>

        
      </div>

    </div>
  )
}
