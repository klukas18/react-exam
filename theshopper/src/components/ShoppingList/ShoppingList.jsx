import React, { useState, useContext } from 'react';
import { ShoppingListContext } from '../ShoppingListContext/ShoppingListContext';

import styles from './ShoppingList.module.css';

const ShoppingList = () => {
	const [crossedProducts, setCrossedProducts] = useState([]);
	const { items, removeFromShoppingList: removeFromShoppingListContext } =
		useContext(ShoppingListContext);

	const toggleCrossedOut = (product) => {
		setCrossedProducts((prevItems) => {
			if (prevItems.includes(product.name)) {
				return prevItems.filter((item) => item !== product.name);
			} else {
				return [...prevItems, product.name];
			}
		});
	};

	const removeFromShoppingList = (product) => {
		removeFromShoppingListContext(product);
		setCrossedProducts((prevItems) =>
			prevItems.filter((item) => item !== product.name)
		);
	};

	return (
		<div className={styles.shoppingList}>
			{items.map((item) => (
				<div
					className={styles.shoppingListItem}
					key={item.name}
					onContextMenu={(event) => {
						event.preventDefault();
						toggleCrossedOut(item);
					}}
					onClick={() => removeFromShoppingList(item)}
					style={{
						textDecoration: new Set(crossedProducts).has(item.name)
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
