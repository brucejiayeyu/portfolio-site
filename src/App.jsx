import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import FocusAreas from './components/FocusAreas.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <main>
        <About />
        <FocusAreas />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
