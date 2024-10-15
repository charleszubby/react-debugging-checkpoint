import React from "react";
import PlayersList from "./components/PlayersList";

const App = () => {
  return (
    <div style={{ backgroundColor: "grey" }}>
      <h1>LIST OF PLAYERS</h1>

      <PlayersList />
    </div>
  );
};

export default App;
