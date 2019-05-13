import React from "react";
import logo from "./logo.svg";
import "./App.css";

/* Component */
import PeopleList from "./components/PeopleList/PeopleList";

function App() {
  return (
    <div className="App">
      <div>
        <PeopleList />
      </div>
    </div>
  );
}

export default App;
