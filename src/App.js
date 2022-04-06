import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {

	const [whosInView, setWhosInView] = useState('about');

	const { ref: aboutRef, inView: aboutInView, entry: aboutEntry } = useInView({
		threshold: 0.4
	});
	const { ref: projectRef, inView: projectInView, entry: projectEntry } = useInView({
		threshold: 0.4
	});
	const { ref: resumeRef, inView: resumeInView, entry: resumeEntry} = useInView({
		threshold: 0.4
	});

	useEffect(() => {
		if (aboutInView) {
			setWhosInView('about');
		};
		if (projectInView) {
			setWhosInView('projects');
		};
		if (resumeInView) {
			setWhosInView('resume');
		};

		return () => {
			setWhosInView('');
		};

	}, [aboutInView, projectInView, resumeInView]);

  	return (
		<div className='App'>
			<Navigation whosInView={whosInView}/>
			<div className='App__container'>

				<div ref={aboutRef}>
					<About inView={aboutInView} />
				</div>

				<div ref={projectRef}>
					<Projects inView={projectInView} />
				</div>

				<div ref={resumeRef}>
					<Resume inView={resumeInView} />
				</div>

				<Footer />
			</div>
		</div>
	);
};

export default App;
