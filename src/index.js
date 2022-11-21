import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./Button";
import Saludar from "./Saludos";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Saludar name="Kevin" age={21} />
    <Button text="Presioname" />
    <Button text="Y no hay error" />
    <Button text="Tu nombre es" name = 'Kevin' />
  </>
);
