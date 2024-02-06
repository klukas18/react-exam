import React, { useState } from 'react';
import ListActions from './components/ListActions/ListActions';
import ProductsList from './components/ProductsList/ProductsList';
import ShoppingList from './components/ShoppingList/ShoppingList';
import products from './common/consts/products';
import { ShoppingListContext } from './components/ShoppingListContext/ShoppingListContext';

import './App.css';

function App() {
	const [shoppingList, setShoppingList] = useState([]);

	const addToShoppingList = (product) => {
		setShoppingList((prevList) => {
			const existingItem = prevList.find((item) => item.name === product.name);
			if (existingItem) {
				// If the item already exists, increase its count
				return prevList.map((item) =>
					item.name === product.name ? { ...item, count: item.count + 1 } : item
				);
			} else {
				// If the item doesn't exist, add it with a count of 1
				return [...prevList, { ...product, count: 1 }];
			}
		});
	};

	const removeFromShoppingList = (product) => {
		setShoppingList((prevList) =>
			prevList.filter((item) => item.name !== product.name)
		);
	};

	return (
		<ShoppingListContext.Provider
			value={{
				items: shoppingList,
				addToShoppingList,
				removeFromShoppingList,
			}}>
			<div className='columns'>
				<ProductsList products={products} />
				<ListActions />
				<ShoppingList />
			</div>
		</ShoppingListContext.Provider>
	);
}

export default App;
