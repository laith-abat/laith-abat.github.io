import logo from './logo.svg';
import Navbar from './Navbar';
import Home from './Home';
import Careers from './Careers';
import About from './About';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </>
  );
}

export default App;
