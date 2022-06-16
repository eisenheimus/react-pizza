import { Routes, Route } from 'react-router-dom';

import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound/index.jsx';

import './scss/app.scss';
// import pizzas from './assets/pizzas.json';
// import { useEffect, useState } from 'react';

function App() {
	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<div className="container">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default App;
