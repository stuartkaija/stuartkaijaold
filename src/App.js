import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Navigation from './components/Navigation/Navigation';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navigation />
        {/* <div className='App__container'> */}
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
        {/* </div> */}
      </Router>
    </div>
  );
}

export default App;
