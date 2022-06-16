import React, { useState } from 'react';

function Categories() {
	let [active, setActive] = useState(0);

	let categoryies = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

	return (
		<div className="categories">
			<ul>
				{categoryies.map((item, index) => (
					<li
						key={index}
						onClick={() => setActive(index)}
						className={active === index ? 'active' : ''}>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
}
export default Categories;
