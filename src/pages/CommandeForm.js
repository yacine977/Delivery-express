import React from 'react';

import Footer from '../components/Footer';

import Header from '../components/Header';
import { MapContainer } from '../components/MapContainer';

import Test from '../components/Test';


const Commande = () => {
    return (
        <div >
          
          
          <Header />
          <MapContainer />
         <div > <h2>Formulaire de commande</h2> </div>
          
          <Test />
          
          <Footer /> 
        </div>
    );
};

export default Commande
