import React from 'react';
import Navbar from "./Components/Navbar";
import MainContent from './Components/MainContent';
import Footer from './Components/Footer';

function App() {
	return (
		<React.Fragment>
			<Navbar/>
			<MainContent />
			<Footer />
		</React.Fragment>
	);
}

export default App;
