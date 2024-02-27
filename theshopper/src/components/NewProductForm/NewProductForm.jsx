import React, { useState } from 'react';

import styles from './NewProductForm.module.css';

const NewProductForm = ({ onProductSubmit }) => {
	const [newProduct, setNewProduct] = useState({
		name: '',
		category: '',
		isFood: false,
	});
	const [showForm, setShowForm] = useState(false);

	const handleInputChange = (event) => {
		const value =
			event.target.type === 'checkbox'
				? event.target.checked
				: event.target.value;
		setNewProduct({ ...newProduct, [event.target.name]: value });
	};

	const toggleForm = () => {
		setShowForm((prevShowForm) => !prevShowForm);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onProductSubmit(newProduct);
		setNewProduct({ name: '', category: '', isFood: false });
	};

	return (
		<div className={styles.formBox}>
			<button onClick={toggleForm} className={styles.showButton}>
				{showForm ? 'Hide' : 'Add product'}
			</button>
			{showForm && (
				<form onSubmit={handleSubmit} className={styles.newProductForm}>
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
							onChange={handleInputChange}
						/>{' '}
						That's food
					</label>
					<button type='submit' className={styles.addButton}>
						Add New Product
					</button>
				</form>
			)}
		</div>
	);
};

export default NewProductForm;
