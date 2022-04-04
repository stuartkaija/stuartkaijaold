import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {

	const whosInView = (string) => {
		console.log(string + ' is in view');
	};

  	return (
		<div className='App'>
			<Navigation />
			<div className='App__container'>
				<About whosInView={whosInView}/>
				<Projects whosInView={whosInView} />
				<Resume whosInView={whosInView}/>
				<Footer />
			</div>
		</div>
	);
}

export default App;
