import { useEffect, useState } from "react";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="bg-red-500 text-white p-10">
      Hello World
    </div>
  );
}

export default App;