// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
  return (
		<div className='App'>
			<Navigation />
			<div className='App__container'>
				<About />
				<Projects />
				<Resume />
				<Footer />
			</div>
		</div>
	);
}

export default App;
