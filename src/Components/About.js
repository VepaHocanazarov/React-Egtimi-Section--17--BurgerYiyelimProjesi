import React from 'react';
import BannerImage from "../Images/banneryeni.jpg";
import "../Styles/About.css"


export const About = () => {
  return (
    <div className='about'>

      <div className='aboutTop' style={{ backgroundImage: `url(${BannerImage})` }}></div>
      <div className='aboutBottom'>
        <h1>Hakkımızda</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nesciunt repudiandae sunt ullam delectus reiciendis perferendis commodi tempore aut totam consequatur ut impedit, eaque temporibus qui.
          Ad quaerat cumque dolorum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolores perferendis fuga, tempore unde exercitationem vero commodi id animi, necessitatibus labore odio! Molestiae rem maxime quae tenetur dolorum recusandae amet.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vero culpa voluptate maxime, perspiciatis commodi. Voluptatibus aut sint ducimus in molestias mollitia sed deleniti hic animi. Minima ut eum ducimus.
        </p>
      </div>

    </div>
  )
}
