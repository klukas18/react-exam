import React from 'react';

import styles from './FilterForm.module.css';

const FilterForm = ({
	name,
	setName,
	category,
	setCategory,
	isFood,
	setIsFood,
	categories,
}) => {
	return (
		<div className={styles.filterInput}>
			<input
				type='text'
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder='Filter by name'
			/>
			<select value={category} onChange={(e) => setCategory(e.target.value)}>
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
					checked={isFood}
					onChange={(e) => setIsFood(e.target.checked)}
				/>{' '}
				Show only food
			</div>
		</div>
	);
};

export default FilterForm;
