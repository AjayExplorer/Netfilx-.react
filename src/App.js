import React from "react";
import "./App.css"
import NavBar from "./component/NavBar.js/NavBar";
import Banner from "./component/Banner/Banner";
import RowPost from "./component/RowPost/RowPost";
function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost/>
    </div>
  );
}

export default App;
