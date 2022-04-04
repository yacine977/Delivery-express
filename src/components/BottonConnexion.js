import React from 'react';


const BottonConnexion = () => {
    return (
        <div className='connexion-restaurant'>
              <select name="restaurant" >
               <option  value="">--Choisissez votre restaurant--</option>
               <option id='9vn' value="">Burger King</option>
               <option id='1ed' value="">Poke Dom Dom</option>
               <option id='2ab' value="">Suchi Box</option>
               <option id='3sd' value="">Mcdonald</option>
               <option id='4kk' value="">Spicy Grill</option>
               <option id='5pl' value="">The First Color Burger</option>
               <option id='6uo' value="">La Ruota</option>
               <option id='7ie' value="">Kabuki</option>
               <option id='8fp' value="">Couscous Mania</option>
           </select><br></br><br></br>
           <button className='connexion-livreur' >Connexion Livreur</button> 
           
        
        
        </div>
    );
};

export default BottonConnexion;