import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import Hero1 from "./components/Hero1";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
function App() {
  
  return (
    <>
      <Navbar />
      {/* <Hero1/> */}
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App
