import React from "react";
import "./App.css";

/* Component */
import PeopleList from "./components/PeopleList/PeopleList";
import Pagination from "./components/Pagination/Pagination";

function App() {
  return (
    <div className="App">
      <div>
        <Pagination />
        <PeopleList />
      </div>
    </div>
  );
}

export default App;
