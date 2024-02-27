import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { ShoppingListContext } from './components/ShoppingListContext/ShoppingListContext';
import ProductsList from './components/ProductsList/ProductsList';
import ShoppingList from './components/ShoppingList/ShoppingList';
import FilterForm from './components/FilterForm/FilterForm';
import NewProductForm from './components/NewProductForm/NewProductForm';
import products from './common/consts/products';

import styles from './App.module.css';

function App() {
	const [shoppingList, setShoppingList] = useState([]);
	const [productList, setProductList] = useState(products);
	const [filteredProducts, setFilteredProducts] = useState(products);
	const [filter, setFilter] = useState({
		name: '',
		category: '',
		isFood: false,
	});

	// Adding and removing elements from the shopping list

	const addToShoppingList = useCallback((product) => {
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
	}, []);

	const removeFromShoppingList = useCallback((product) => {
		setShoppingList((prevList) =>
			prevList.filter((item) => item.name !== product.name)
		);
	}, []);

	// Filtering the products list

	const categories = useMemo(() => {
		return [...new Set(productList.map((product) => product.category))];
	}, [productList]);

	const filterProducts = useCallback(
		(products, filter) => {
			return products.filter(
				(product) =>
					(filter.name
						? product.name.toLowerCase().includes(filter.name.toLowerCase())
						: true) &&
					(filter.category ? product.category === filter.category : true) &&
					(filter.isFood ? product.isFood === filter.isFood : true)
			);
		},
		[filter]
	);

	useEffect(() => {
		let filtered = filterProducts(productList, filter);
		setFilteredProducts(filtered);
	}, [filter, productList]);

	const handleProductSubmit = useCallback(
		(newProduct) => {
			setProductList([...productList, newProduct]);
		},
		[productList]
	);

	return (
		<ShoppingListContext.Provider
			value={{
				items: shoppingList,
				addToShoppingList,
				removeFromShoppingList,
			}}>
			<h1 className={styles.textGradient}>The Shopper</h1>
			<div className={styles.container}>
				<ProductsList
					products={filteredProducts}
					productList={productList}
					setProductList={setProductList}
				/>
				<div className={styles.actions}>
					<FilterForm
						filter={filter}
						setFilter={setFilter}
						categories={categories}
					/>
					<NewProductForm onProductSubmit={handleProductSubmit} />
				</div>
				<ShoppingList />
			</div>
		</ShoppingListContext.Provider>
	);
}

export default App;
