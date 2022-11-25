import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Counter = () => {
  const [mensaje, setMensaje] = useState("");
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("cambio");
  }, [contador]);

  return (
    <div>
      <input onChange={(event) => setMensaje(event.target.value)} />
      <button onClick={() => console.log(`El mensaje es: ${mensaje}`)}>
        Save
      </button>
      <hr />

      <div>
        <h1>{`Contador: ${contador}`}</h1>
        <button onClick={() => setContador(contador + 1)}>Agregar</button>
      </div>
    </div>
  );
};

root.render(
  <>
    <Counter />
  </>
);
