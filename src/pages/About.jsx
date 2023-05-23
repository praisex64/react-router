
import React from 'react';
import mg from "../assets/images/about-hero.png"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


export default function About() {
    return (
        <div className="about-page-container">
            <img src={mg} className="about-hero-image" />
            <div className="about-page-content">
                <h1>Dont squeeze in a sedan when you could relax in a van.</h1>
                <p>
                This generator randomly pulls from my collection of favorite quotes,
                 just over 400 as of October 2022. Come back every so often to copy new additions.
                </p>
                <p>
                This generator randomly pulls from my collection of favorite quotes,
                 just over 400 as of October 2022. Come back every so often to copy new additions.
                </p>
            </div>
            <div className='about-page-cta'>
                <h2>This is a heading two</h2>
                <Link className="link-button" to="/vans">Explore our vans</Link>
            </div>
        </div>
    )
}