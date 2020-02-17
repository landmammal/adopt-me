import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me</h1>
      <Pet name="luna" animal="Dog" breed="Havanes" />
      <Pet name="pepper" animal="Bird" breed="Cocktail" />
      <Pet name="Bob" animal="Cat" breed="Mixed" />

      {Pet({
        name: "Pepper",
        animal: "Bird",
        breed: "Cocktail"
      })}
      {Pet({
        name: "Doink",
        animal: "Cat",
        breed: "Mixed "
      })}
    </div>
  );
};

render(<App />, document.getElementById("root"));
