import './App.css';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import OtherWorks from './components/OtherWorks/OtherWorks';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';

function App() {
  return (
      <div className="App">
        <Navbar />
        <Hero />
        <Work />
        <OtherWorks />
        <Skills />
        <Contact />
        <Footer /> 
      </div>
  );
}

export default App;
