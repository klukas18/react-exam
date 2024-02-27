import React, { useContext } from 'react';
import { ShoppingListContext } from '../ShoppingListContext/ShoppingListContext';

import styles from './ProductsList.module.css';

const ProductsList = ({ products }) => {
	const { addToShoppingList } = useContext(ShoppingListContext);

	const handleAddToShoppingList = (product) => {
		addToShoppingList(product);
	};

	return (
		<div className={styles.productsList}>
			{products.map((product) => (
				<div key={product.name} className={styles.productItem}>
					<h2>{product.name}</h2>
					<button onClick={() => handleAddToShoppingList(product)}>
						Add to list
					</button>
				</div>
			))}
		</div>
	);
};

export default ProductsList;
