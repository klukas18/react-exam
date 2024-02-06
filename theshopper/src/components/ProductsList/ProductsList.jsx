import React, { useContext } from 'react';
import { ShoppingListContext } from '../ShoppingListContext/ShoppingListContext';
import products from '../../common/consts/products';

import './ProductsList.css';


const ProductsList = ({ products }) => {
	const { addToShoppingList } = useContext(ShoppingListContext);

	return (
		<div>
			{products.map((product, index) => (
				<div key={index}>
					<h2>{product.name}</h2>
					<p>{product.description}</p>
					<button onClick={() => addToShoppingList(product)}>
						Add to shopping list
					</button>
				</div>
			))}
		</div>
	);
};

export default ProductsList;
