import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Experience from "./components/Experience";


function App() {
  const [loading, setLoading] = useState(true);

  // ⏳ loading timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Nav />
      <Home />
      <Skills />
      <Project />
      <Experience />
      <Contact />
      <Footer />    
    </>
  );
}

export default App;
