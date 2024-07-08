import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import './App.css';
import './index.css';  

const App = () => {
  return (
    <Router>
      <div className="p-10 flex flex-col space-y-4 w-auto justify-center items-center text-white">
        <Header />
        <nav>
          <ul className='flex flex-row space-x-4 text-lg '>
            <li className='no-underline hover:underline'><Link to="/">Perfil</Link></li>
            <li className='no-underline hover:underline'><Link to="/experience">Experiencia</Link></li>
            <li className='no-underline hover:underline'><Link to="/education">Educación</Link></li>
            <li className='no-underline hover:underline'><Link to="/skills">Habilidades</Link></li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
