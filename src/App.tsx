import React from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import Filters from "./components/Filters";
import Banner from "./components/Banner";
import Cities from "./components/Cities";
import Studios from "./components/Studios";
import Jampads from "./components/Jampads";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Filters />
      <Banner />
      <Cities />
      <Studios />
      <Jampads />
    </div>
  );
}

export default App;
