import React from "react";
import myPhoto from "../assets/myphoto.jpg";



export default function About({ name, role, bio }) {
  return (
    <div className="container about">
      <div className="about-left">
       <img className="avatar" src={myPhoto} alt={`${name} avatar`} />



      </div>

      <div className="about-right">
        <h2>{name}</h2>
        <h4 className="muted">{role}</h4>
        <p>{bio}</p>

        <div className="cta-row">
          <a className="btn" href="#contact" onClick={(e)=>{e.preventDefault(); document.getElementById('contact').scrollIntoView({behavior:'smooth'})}}>Contact me</a>
          <a className="btn ghost" href="#" onClick={(e)=>e.preventDefault()}>Download CV</a>
        </div>
      </div>
    </div>
  );
}
