import React, { useState } from "react";
import PostItem from "./components/PostItem";
import "./styles/App.css"

function App() {
  return (
    <div className="App">
      <PostItem/>
      <PostItem/>
    </div>
  );
}

export default App;
