import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/ContactForm';
import AboutMe from './pages/AboutMe';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

