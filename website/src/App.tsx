import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Projects from './pages/Projects';
import UpcomingProjects from './pages/UpcomingProjects';
import Rentals from './pages/Rentals';
import Gallery from './pages/Gallery';
import Investor from './pages/Investor';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

const base = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL.slice(0, -1)
  : import.meta.env.BASE_URL;

export default function App() {
  return (
    <BrowserRouter basename={base}>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/upcoming-projects" element={<UpcomingProjects />} />
            <Route path="/rentals" element={<Rentals />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/investor" element={<Investor />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
