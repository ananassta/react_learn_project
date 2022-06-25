import React, { useState } from "react";
import PostItem from "./components/PostItem";
import "./styles/App.css"

function App() {
  return (
    <div className="App">
      <PostItem post={{id: 1, title: 'JavaScript', body: "JavaScript - язык программирования"}}/>
      {/* <PostItem/> */}
    </div>
  );
}

export default App;
