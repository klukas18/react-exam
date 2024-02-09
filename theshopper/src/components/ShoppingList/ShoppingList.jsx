import React, { useContext } from 'react';
import { ShoppingListContext } from '../ShoppingListContext/ShoppingListContext';

import styles from './ShoppingList.module.css';

const ShoppingList = ({ toggleCrossedOut, crossedProducts }) => {
	const { items, removeFromShoppingList } = useContext(ShoppingListContext);

	return (
		<div className={styles.shoppingList}>
			{items.map((item, index) => (
				<div
					className={styles.shoppingListItem}
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
