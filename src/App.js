import Navbar from './components/Navbar';
import Title from '../src/Pages/Title';
import Experience from '../src/Pages/Experience';
import AboutMe from '../src/Pages/AboutMe';
import Projects from '../src/Pages/Projects';
import Interest from '../src/Pages/Interest';
import Footer from './components/Footer';
import {Route, Routes, useLocation} from 'react-router-dom';
import React, {useEffect} from 'react';
import ScrollToTop from './js/ScrollToTop';


function App() {



  return (
      <div className="App">
        <ScrollToTop/>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Title />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Interest" element={<Interest />} />
        </Routes>
        <footer class="footer">
            <Footer />
          </footer>
      </div>
  );
}


export default App;
