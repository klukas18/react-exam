import React, { useContext } from 'react';
import { ShoppingListContext } from '../ShoppingListContext/ShoppingListContext';

import styles from './ProductsList.module.css';

const ProductsList = ({ products }) => {
	const { addToShoppingList } = useContext(ShoppingListContext);

	return (
		<div className={styles.productsList}>
			{products.map((product, index) => (
				<div key={index} className={styles.productItem}>
					<h2>{product.name}</h2>
					<button onClick={() => addToShoppingList(product)}>
						Add to list
					</button>
				</div>
			))}
		</div>
	);
};

export default ProductsList;
