import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/hero.css";

import img1 from "../assets/hero/img1.jpg";
import img3 from "../assets/hero/img30.jpg";

const images = [img1,img3];

const Hero = () => {

const [active,setActive]=useState(0);

useEffect(()=>{

const interval=setInterval(()=>{

setActive((prev)=>(prev+1)%images.length);

},4000);

return()=>clearInterval(interval);

},[]);

return(

<section className="hero">

<div className="hero-bg">

<img
src={images[active]}
alt="Luxury collection"
/>

</div>

<div className="overlay"></div>

<div className="hero-left">

<span className="hero-tag">
LUXURY COLLECTION
</span>

<h1>
Crafted <br/>
Captured Cherished
</h1>

<p>
Luxury fashion crafted for your unforgettable moments.
</p>

<Link className="hero-btn" to="/collections">
Explore Collection →
</Link>

</div>

</section>

);

};

export default Hero;