import React, { useRef} from 'react';
// import useIntersection from './hooks/useIntersection';
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
	
	// const onIntersection = (entries, opts) => {
	// 	entries.forEach((entry) => {
	// 		entry.target.classList.toggle('visible', entry.isIntersecting)
	// 	})
	// }

	// const observer = new IntersectionObserver(onIntersection, {
	// 	root: null,
	// 	threshold: .5
	// })

	// observer.observe(document.querySelector('box1'))

  	return (
		<div className='App'>
			<Navigation />
			<div className='App__container'>
				<About />
				{/* <div className='box1'>box 1 here</div> */}
				<Projects />
				{/* <div className='box2'>box 2</div> */}
				<Resume />
				{/* <div className='box3'>box 3</div> */}
				<Footer />
			</div>
		</div>
	);
}

export default App;
