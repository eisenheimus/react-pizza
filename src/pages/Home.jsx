import React from 'react';
import { useState, useEffect } from 'react';

import Categories from '../components/Categories.jsx';
import PizzaBlock from '../components/PizzaBlock.jsx';
import Sort from '../components/Sort.jsx';

function Home() {
	let [items, setItems] = useState([]);

	useEffect(() => {
		fetch('https://62a75c0a97b6156bff8d2513.mockapi.io/items')
			.then((data) => data.json())
			.then((data) => setItems(data));
	});

	return (
		<>
			<div className="content__top">
				<Categories />
				<Sort />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{items.map((obj) => (
					<PizzaBlock {...obj} />
				))}
			</div>
		</>
	);
}

export default Home;
