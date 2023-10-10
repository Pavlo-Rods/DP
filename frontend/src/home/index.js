import React from 'react';
import '../App.css';
import '../static/css/home/home.css'; 
import logo from '../static/images/Logo_Upstream.jpg'

export default function Home(){
    return(
        <div className="home-page-container">
            <div className="hero-div">
                <h1>Upstream Online</h1>
                <h3></h3>
                <img src={logo} />
                <h3></h3>
                <h3>La carrera de los salmones</h3>                
            </div>
        </div>
    );
}