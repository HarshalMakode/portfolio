import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Nav from "./components/Nav";

function App() {
  const [loading, setLoading] = useState(true);

  // ⏳ loading timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
      document.body.style.cursor = "none";   
    } else {
      document.body.style.overflow = "auto";
      document.body.style.cursor = "auto"; 
    }
  }, [loading]);

  if (loading) return <Loader />;

  return (
    <>
      <Nav />
    </>
  );
}

export default App;