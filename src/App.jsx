import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Shows from './components/Shows';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <Hero />
        <Shows />
      </main>
      <Footer />
    </div>
  );
}

export default App;
