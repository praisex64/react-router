
import React from 'react';
import { Link } from "react-router-dom"
import bgImg from "../assets/images/home-hero.png"

export default function Home() {
    return (
        <div className='home-container'>
            <img src={bgImg} className="about-hero-image" />
            <h1>You got the travel plans, we got the tranvel vans. </h1>
            <p>Add adventure to your life by joining the #vanline move to make your perfect road trip.</p>
            
        </div>
    )
}

