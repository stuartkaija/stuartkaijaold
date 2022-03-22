import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Navigation from './components/Navigation/Navigation';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
