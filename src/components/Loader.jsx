import pikachu from "../assets/pikachu.gif";

function Loader() {
  return (
    <div className="loader-screen">
      <img src={pikachu} className="w-40" alt="loading" />
    </div>
  );
}

export default Loader;