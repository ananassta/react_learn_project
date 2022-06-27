import React, { useState } from "react";
import PostList from "./components/PostList";
import "./styles/App.css"

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript 1', body: "JavaScript - язык программирования"},
    {id: 2, title: 'JavaScript 2', body: "JavaScript"},
    {id: 3, title: 'JavaScript 3', body: "Язык программирования"}
  ])
  return (
    <div className="App">
      <PostList posts={posts} title={"Список постов 1"}/>
      <PostList posts={posts} title={"Список постов 2"}/>
    </div>
  );
}

export default App;
