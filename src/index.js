import React, { useState } from "react";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById("root"));

const Counter = () => {
  const [mensaje, setMensaje] = useState('')
  return (
    <div>
      <input onChange={event => setMensaje(event.target.value)}/>
      <button onClick={() => console.log(`El mensaje es: ${mensaje}`)}>
        Save
      </button>
    </div>
  );
}

root.render(
  <>
    <Counter />
  </>
);
