import React, { useContext } from 'react';
import { ShoppingListContext } from '../ShoppingListContext/ShoppingListContext';

import './ShoppingList.css';

const ShoppingList = () => {
	const { items, removeFromShoppingList } = useContext(ShoppingListContext);

	return (
		<div>
			{items.map((item, index) => (
				<div
					key={index}
					onContextMenu={(event) => {
						event.preventDefault();
						removeFromShoppingList(item);
					}}>
					<h2>
						{item.name} ({item.count})
					</h2>
					<p>{item.description}</p>
				</div>
			))}
		</div>
	);
};

export default ShoppingList;
