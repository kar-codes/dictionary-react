import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          Dictionary
        </header>
        <main>
          <Dictionary />
        </main>
      </div>
      <footer className="text-center">
          <small>Coded by Kar and is open-source on Github</small>
      </footer>
    </div>
  );
}

export default App;
