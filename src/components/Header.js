import React from 'react';
import '../styles/Header.css';
import logo from '../assets/logo.png';

import { NavLink } from 'react-router-dom';
import BottonConnexion from './BottonConnexion';



const Header = () => {  
    return (

        <div className='lmj-header'>
         <BottonConnexion />   
        <img src={logo} alt='La maison jungle' className='lmj-logo' /> 
        
        
   
         <nav>
        <ul>
        <NavLink to={"/"}> <li>Accueil</li> </NavLink>
        <NavLink to={"/mes-commandes"}> <li>Commander</li> </NavLink>
          
        
        </ul>

        
        
        </nav>
             
         
        

        <center>
        
        <h1 className='slogon'>" Plus prés de vous et de vos gouts " </h1> </center>
                 
        </div>
        
    );
};

export default Header;         