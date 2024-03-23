import logo from './logo.svg';
import Navbar from './routes/Navbar';
import Home from './routes/Home';
import Careers from './routes/Careers';
import About from './routes/About';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={process.env.PUBLIC_URL + '/'} element={<Home />} />
        <Route path={process.env.PUBLIC_URL + '/about'} element={<About />} />
        <Route path={process.env.PUBLIC_URL + '/careers'} element={<Careers />} />
      </Routes>
    </>
  );
}

export default App;
