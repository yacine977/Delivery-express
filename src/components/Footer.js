import { useState } from 'react'
import '../styles/Footer.css'
import logo from '../assets/logo.png';

function Footer() {
	const [inputValue, setInputValue] = useState('')

	function handleInput(e) {
		setInputValue(e.target.value)
	}

	function handleBlur() {
		if (!inputValue.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
		}
	}

	return (
		<footer className='lmj-footer'>
		
			
			<div className='lmj-footer-elem'>
		
			
		
			<div><img src={logo} alt='La maison jungle' className='lmj-logo' /> </div>	
			<div>	<p>Rester informé des nouveautés 🍕🍔🥞</p> 
			<p>Laissez-nous votre mail : </p> 
			<input
				placeholder=' Entrez votre mail'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur} />&nbsp;&nbsp;
				<button>Envoyer</button> </div>
				<div><img src={logo} alt='La maison jungle' className='lmj-logo' /> </div>
		</div>
		</footer>
	)
}

export default Footer
