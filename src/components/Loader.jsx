import pikachu from "../assets/pikachu.gif";

function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <img src={pikachu} className="w-40" />
    </div>
  );
}

export default Loader;