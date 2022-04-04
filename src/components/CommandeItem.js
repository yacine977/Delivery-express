

import '../styles/CommandeItem.css'

function handleClick(CommandeName) {
	alert(`Vous voulez acheter 1 ${CommandeName}? Très bon choix `)
}

function CommandeItem({ cover, name, price}) {
	return (
		<li className='lmj-plant-item' onClick={() => handleClick}>
			<span className='lmj-plant-item-price'>{price}€</span>
			<img className='lmj-plant-item-cover' src={cover} alt={` cover`} />
			{name}
			
		</li>
	)
}

export default CommandeItem
