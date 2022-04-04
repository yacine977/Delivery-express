import { NavLink } from 'react-router-dom';
import { CommandeList } from '../datas/CommandeList';
import '../styles/OrderList.css';
import CommandeItem from './CommandeItem';



function OrderList({ cart, updateCart }) {


	return (
		<div>



			<ul className='lmj-plant-list'>
				{CommandeList.map(({ id, cover, name, price }) => (
					<div key={id}>
						<CommandeItem cover={cover} name={name} price={price} />
						<NavLink to={"/mes-commandes"}> <button className='commander' onClick={() => updateCart(cart + 1)}>Commander</button> </NavLink>
					</div>
				))}
			</ul>








		</div>
	)
}
export default OrderList;      