import React, { useState } from 'react';
import './ExpenseEntryItemList.css';

// componet
function ExpenseEntryItemList(props) {
	


	// initialize state hooks with items passed into the component through props

	const [items, setItems] = useState(props.items);

	// create event handler to highlight the itemlist rows 

	function handleMouseEnter(e) {
		e.target.parentNode.classList.add("highlight");
	}

	function handleMouseLeave(e) {
		e.target.parentNode.classList.remove("highlight");
	}

	function handleMouseOver(e) {
	 	console.log("The mouse is at (" + e.clientX + ", " + e.clientY + ")");
	}

	// create event handler to remove the selected items 

	function handleDelete(id, e) {
		e.preventDefault();
		console.log(id);

		let newItems = [];

		items.forEach((item, idx) => {
			if (item.id != id)
				newItems.push(item)
		})
		setItems(newItems);
	}

	// method to calculate the total amount 
	function getTotal() {
 		let total = 0;
 		for (var i = 0; i < items.length; i++) {
 			total += items[i].amount
 		}
 		return total;
 	}

	const lists = items.map((item) =>
 		<tr key={item.id} onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
 			<td>{item.name}</td>
			<td>{item.amount}</td>
 			<td>{new Date(item.spendDate).toDateString()}</td>
 			<td>{item.category}</td>
 			<td><a href="#"
 				onClick={(e) => handleDelete(item.id, e)}>Remove</a></td>
 		</tr>
 	);

	return (
		<div>
		<h1>Expense Manager using State Hook</h1>
			<table onMouseOver={handleMouseOver}>
				<thead>
					<tr>
						<th>Item</th>
						<th>Amount</th>
						<th>Date</th>
						<th>Category</th>
						<th>Remove</th>
					</tr>
				</thead>

				<tbody>
					{lists}
					<tr>
						<td colSpan="1" style={{ textAlign: "right" }}> Total Amount </td>
						<td colSpan="4" style={{ textAlign: "left" }}> {getTotal()} </td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default ExpenseEntryItemList;