import React, { useContext, useState } from 'react';
import { ShoppingListContext } from '../ShoppingListContext/ShoppingListContext';
// import products from '../../common/consts/products';

import './ProductsList.css';

const ProductsList = ({ products, productList, setProductList }) => {
	const { addToShoppingList } = useContext(ShoppingListContext);
	const [newProduct, setNewProduct] = useState({
		name: '',
		category: '',
		isFood: false,
	});

	const handleInputChange = (event) => {
		setNewProduct({ ...newProduct, [event.target.name]: event.target.value });
	};

	const handleCheckboxChange = (event) => {
		setNewProduct({ ...newProduct, isFood: event.target.checked });
	};

	const handleAddProduct = (event) => {
		event.preventDefault();
		setProductList([...productList, newProduct]);
		setNewProduct({ name: '', category: '', isFood: false });
	};

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
			<form onSubmit={handleAddProduct}>
				<input
					type='text'
					name='name'
					value={newProduct.name}
					onChange={handleInputChange}
					placeholder='Product Name'
					required
				/>
				<input
					type='text'
					name='category'
					value={newProduct.category}
					onChange={handleInputChange}
					placeholder='Category'
					required
				/>
				<label>
					<input
						type='checkbox'
						name='isFood'
						checked={newProduct.isFood}
						onChange={handleCheckboxChange}
					/>
					Is Food
				</label>
				<button type='submit'>Add New Product</button>
			</form>
		</div>
	);
};

export default ProductsList;
