import React, { useState, useEffect } from 'react';
import { useInView, InView } from 'react-intersection-observer';

import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {

	const { ref, inView, entry } = useInView({
		threshold: 1
	});
	
	console.log(ref);
	console.log(inView);
	console.log(entry);

  	return (
		<div className='App'>
			<Navigation />
			<div className='App__container'>
				<InView>
					<About />
				</InView>
				<div id='woot' ref={ref}>
					<h2>{`Fucking header inside viewport ${inView}.`}</h2>
				</div>
				<Projects />
				<Resume />
				<Footer />
			</div>
		</div>
	);
}

export default App;
