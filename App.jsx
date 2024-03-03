import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className="w-full h-screen  duration-200" style={{ backgroundColor: color }}>

        <div className="fixed  left-1/2 bottom-20 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 py-1 rounded-3xl">

          <button onClick={() => setColor("red")} className=" shadow-xl inline-block rounded-xl px-3 m-1 text-white font-semibold border border-black" style={{ backgroundColor: "red" }}><h1>Red</h1></button>
          <button onClick={() => setColor("blue")} className=" shadow-xl inline-block rounded-xl px-3 m-1 text-white font-semibold border border-black" style={{ backgroundColor: "blue" }}><h1>Blue</h1></button>
          <button onClick={() => setColor("orange")} className=" shadow-xl inline-block rounded-xl px-3 m-1 text-white font-semibold border border-black" style={{ backgroundColor: "orange" }}><h1>Orange</h1></button>
          <button onClick={() => setColor("green")} className=" shadow-xl inline-block rounded-xl px-3 m-1 text-white font-semibold border border-black" style={{ backgroundColor: "green" }}><h1>Green</h1></button>
          <button onClick={() => setColor("cyan")} className=" shadow-xl inline-block rounded-xl px-3 m-1 text-white font-semibold border border-black" style={{ backgroundColor: "cyan" }}><h1>Cyan</h1></button>

        </div>
      </div>
    </>
  );
}

export default App;
