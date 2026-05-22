import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Download from './components/Download';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Screenshots />
        <Testimonials />
        <FAQ />
        <Download />
      </main>
      <Footer />
    </div>
  );
}

export default App;
