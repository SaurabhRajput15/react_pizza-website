import React from 'react'
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

function About() {
    return (
        <div className="about">
            <div className="aboutTop"
            style={{ backgroundImage: `url(${MultiplePizzas})`}}>    
            </div>
            <div className="aboutBottom">
               <h1>ABOUT US</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, exercitationem corrupti facere odit amet reprehenderit nam totam cum eius ab sit tempora vero ad consequuntur assumenda quisquam veniam natus cupiditate fuga iste repellendus dolorum illum necessitatibus. Et, dicta enim, consequuntur provident nihil, architecto veniam consectetur accusamus libero amet reprehenderit fugit molestias esse laudantium quibusdam! Deleniti ratione dolorem praesentium cumque voluptates iste magni a magnam eos eius quas porro aliquam quidem molestiae nemo veniam repudiandae qui mollitia, consectetur ducimus laudantium dolore! Earum delectus debitis cumque ex et voluptatem unde aspernatur sint temporibus ad nulla inventore neque provident illum praesentium, molestiae totam.</p>
            </div>
        </div>
    );
}

export default About
