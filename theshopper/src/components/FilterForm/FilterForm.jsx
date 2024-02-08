import React from 'react';

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
		<div className='filter'>
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
			<input
				type='checkbox'
				checked={isFood}
				onChange={(e) => setIsFood(e.target.checked)}
			/>{' '}
			Only food
		</div>
	);
};

export default FilterForm;
