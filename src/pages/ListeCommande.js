import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/ListeCommande.css'

import AfaireItem from '../components/AfaireItem';
import { CommandeAfaire } from '../datas/CommandeAfaire';



const ListeCommande = () => {
    

	  
	
	return (
        <div className='page-liste-commande'>
		<Header />
	<div className='titre-commande-a-faire'>	<h2 >Liste des commandes à préparer :</h2>	</div>
        <ul className='lmj-plant-list'>
				
				{CommandeAfaire.map(({ id, num, date, heure,nombreR }) => (
					<div key={id}>
						<AfaireItem id={id} num={num} date={date} heure={heure} nombreR={nombreR}/>
						<button id='' className='button-prete'>Prête </button>

						
						
					</div>
				))}
			</ul>
			<Footer />	    
        </div>
    );
};

export default ListeCommande;