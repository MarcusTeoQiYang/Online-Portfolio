import Navbar from './Navbar';
import Title from './Title';
import Experience from './Experience';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Interest from './Interest';
import Footer from './Footer';
import WebDevPage from './WebDevPage'
import EthHackPage from './EthHackPage'
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';


function App() {
  return (
    <body>
      
      <div className="App">

      <Navbar />
        <section id="Title">
        <Title />
        </section>
        <section id="aboutme">
          <AboutMe />
        </section>
        <section id="projects">
        <Projects />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="interest">
          <Interest />

        </section>
        <footer class="footer">
          <Footer />
        </footer>

    </div>

    </body>
  );
}

export default App;
