

import '../styles/AfaireItem.css'

function handleClick(CommandeName) {
	alert(`Vous voulez acheter 1 ${CommandeName}? Très bon choix `)
}

function CommandeItem({ id, num, date,heure,nombreR}) {
	return (
		<div className='list-commande' onClick={() => handleClick}>
			
            <ul className='lmj-commande-item2'>
            <span className=''> <li> {'id:'} {id}  </li> </span>
			<span> <li> {'Numéro commande:'}  {num} </li> </span> 
            <span className=''> <li> {'Date:'}  {date} </li> </span>
			<span> <li> {'Heure:'} {heure} </li> </span> 
            <span className=''> <li>{} {nombreR} </li></span>
			</ul> 
			
		</div>
	)
}

export default CommandeItem
