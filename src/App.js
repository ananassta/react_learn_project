import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter/>
      <Counter/>
      <Counter/>

      <ClassCounter/>

    </div>
  );
}

export default App;
