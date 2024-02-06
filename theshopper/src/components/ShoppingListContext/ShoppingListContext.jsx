import React from 'react';

export const ShoppingListContext = React.createContext({
	items: [],
	addToShoppingList: () => {},
	removeFromShoppingList: () => {},
});
