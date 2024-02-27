import React from 'react';

import styles from './FilterForm.module.css';

const FilterForm = ({ filter, setFilter, categories }) => {
	const { name, category, isFood } = filter;

	const handleInputChange = (event) => {
		const value =
			event.target.type === 'checkbox'
				? event.target.checked
				: event.target.value;
		setFilter({ ...filter, [event.target.name]: value });
	};

	return (
		<div className={styles.filterInput}>
			<input
				type='text'
				name='name'
				value={name}
				onChange={handleInputChange}
				placeholder='Filter by name'
			/>
			<select name='category' value={category} onChange={handleInputChange}>
				<option value=''>All categories</option>
				{categories.map((category, index) => (
					<option key={index} value={category}>
						{category}
					</option>
				))}
			</select>
			<div>
				<input
					type='checkbox'
					name='isFood'
					checked={isFood}
					onChange={handleInputChange}
				/>{' '}
				Show only food
			</div>
		</div>
	);
};

export default FilterForm;
