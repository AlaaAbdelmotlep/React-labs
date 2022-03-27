import About from './About/About';
import './App.css';
import Footer from './Footer/Footer';
import Landing from './Landing Page/Landing';
import Portfolio from './Portfolio/Portfolio';
import Skills from './Skills/Skills';

function App() {
  return (
    <div className="App">
      <Landing/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
