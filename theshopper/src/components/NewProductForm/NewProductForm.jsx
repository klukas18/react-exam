// import React, { useContext } from 'react';
// import { ShoppingListContext } from '../ShoppingListContext/ShoppingListContext';

// import './NewProductForm.css';

// const NewProductForm = () => {
// 	const [newProduct, setNewProduct] = useState({
// 		name: '',
// 		category: '',
// 		isFood: false,
// 	});

// 	const handleFormSubmit = (event) => {
// 		event.preventDefault();
// 	};

// 	return (
// 		<div className={'NewProductForm'}>
// 			Sample text from NewProductForm component
// 		</div>
// 	);
// };

// export default NewProductForm;

import React, { useContext, useState } from 'react';
import { ShoppingListContext } from '../ShoppingListContext/ShoppingListContext';

const NewProductForm = ({ addToShoppingList }) => {
	const [newProductName, setNewProductName] = useState('');
	const [newProductDescription, setNewProductDescription] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const newProduct = {
			name: newProductName,
			description: newProductDescription,
		};
		addToShoppingList(newProduct);
		setNewProductName('');
		setNewProductDescription('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor='name'>Name:</label>
			<input
				type='text'
				id='name'
				value={newProductName}
				onChange={(e) => setNewProductName(e.target.value)}
			/>

			<input />
		</form>
	);
};

export default NewProductForm;
