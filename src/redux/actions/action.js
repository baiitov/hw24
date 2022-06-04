export const addExpense = ({ title, price, date }) => ({
	type: 'ADD',
	title,
	price,
	date,
})
export const deleteExpense = (id)=> ({
    type: 'DELETE',
    id
})
