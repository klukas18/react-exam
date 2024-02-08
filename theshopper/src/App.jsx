import React, { useState, useEffect } from 'react';

import ProductsList from './components/ProductsList/ProductsList';
import ShoppingList from './components/ShoppingList/ShoppingList';
import products from './common/consts/products';
import { ShoppingListContext } from './components/ShoppingListContext/ShoppingListContext';

import './App.css';

function App() {
	const [shoppingList, setShoppingList] = useState([]);
	const [productList, setProductList] = useState(products);
	const [filteredProducts, setFilteredProducts] = useState(products);
	const [name, setName] = useState('');
	const [category, setCategory] = useState('');
	const [isFood, setIsFood] = useState(false);
	const [crossedProducts, setCrossedProducts] = useState([]);

	// Adding and removing elements from the shopping list

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

	// Filtering the products list

	const categories = [
		...new Set(productList.map((product) => product.category)),
	];

	const filterProducts = (products, name, category, isFood) => {
		return products.filter(
			(product) =>
				(name
					? product.name.toLowerCase().includes(name.toLowerCase())
					: true) &&
				(category ? product.category === category : true) &&
				(isFood ? product.isFood === isFood : true)
		);
	};

	useEffect(() => {
		let filtered = filterProducts(productList, name, category, isFood);
		setFilteredProducts(filtered);
	}, [name, category, isFood, productList]);

	const toggleCrossedOut = (product) => {
		setCrossedProducts((prevItems) => {
			if (prevItems.includes(product.name)) {
				// If the item is already crossed out, remove it from the list
				return prevItems.filter((item) => item !== product.name);
			} else {
				// If the item is not crossed out, add it to the list
				return [...prevItems, product.name];
			}
		});
	};

	return (
		<ShoppingListContext.Provider
			value={{
				items: shoppingList,
				addToShoppingList,
				removeFromShoppingList,
			}}>
			<div className='columns'>
				<ProductsList
					products={filteredProducts}
					productList={productList}
					setProductList={setProductList}
				/>
				<div>
					<input
						type='text'
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder='Filter by name'
					/>
					<select
						value={category}
						onChange={(e) => setCategory(e.target.value)}>
						<option value=''>All categories</option>
						{categories.map((category, index) => (
							<option key={index} value={category}>
								{category}
							</option>
						))}
					</select>
					<input
						type='checkbox'
						checked={isFood}
						onChange={(e) => setIsFood(e.target.checked)}
					/>{' '}
					Only food
				</div>
				<ShoppingList
					toggleCrossedOut={toggleCrossedOut}
					crossedProducts={crossedProducts}
				/>
			</div>
		</ShoppingListContext.Provider>
	);
}

export default App;
