import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Footer from "./components/Footer";

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
      <Footer />
    </>
  );
}

export default App;
