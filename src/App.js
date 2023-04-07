import React from 'react';
import Home from "./Pages/Home";
import About from "./Pages/About";
import { BrowserRouter, RouterProvider,Routes,  Route } from 'react-router-dom';

function App() {
	return (
		<div>
			
			<BrowserRouter>
			<Routes>
				<Route path="/" element={ <Home /> } />
				<Route path="/about" element={ <About /> } />
			</Routes>
			</BrowserRouter>

		</div>
	);
}

export default App;
