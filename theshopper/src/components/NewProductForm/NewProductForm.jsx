import React, { useState } from 'react';

const NewProductForm = ({ productList, setProductList }) => {
	const [newProduct, setNewProduct] = useState({
		name: '',
		category: '',
		isFood: false,
	});
	const [showForm, setShowForm] = useState(false);

	const handleInputChange = (event) => {
		setNewProduct({ ...newProduct, [event.target.name]: event.target.value });
	};

	const handleCheckboxChange = (event) => {
		setNewProduct({ ...newProduct, isFood: event.target.checked });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setProductList([...productList, newProduct]);
		setNewProduct({ name: '', category: '', isFood: false });
	};

	return (
		<div>
			<button onClick={() => setShowForm(!showForm)}>
				{showForm ? 'Hide' : 'Add product'}
			</button>
			{showForm && (
				<form onSubmit={handleSubmit}>
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
			)}
		</div>
	);
};

export default NewProductForm;
