// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
  return (
    <div className='App'>
        <Navigation />
        <div className='App__container'>
          <About />
          <Projects />
          <Footer />
        </div>
    </div>
  );
}

export default App;
