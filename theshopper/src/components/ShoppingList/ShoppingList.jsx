import React, { useContext } from 'react';
import { ShoppingListContext } from '../ShoppingListContext/ShoppingListContext';

import './ShoppingList.css';

const ShoppingList = ({ toggleCrossedOut, crossedProducts }) => {
	const { items, removeFromShoppingList } = useContext(ShoppingListContext);

	return (
		<div>
			{items.map((item, index) => (
				<div
					key={index}
					onContextMenu={(event) => {
						event.preventDefault();
						toggleCrossedOut(item);
					}}
					onClick={() => removeFromShoppingList(item)}
					style={{
						textDecoration: crossedProducts.includes(item.name)
							? 'line-through'
							: 'none',
					}}>
					<h2>
						{item.name} ({item.count})
					</h2>
				</div>
			))}
		</div>
	);
};

export default ShoppingList;
