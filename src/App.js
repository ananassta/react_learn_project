import React, { useState } from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import "./styles/App.css"

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript 1', body: "JavaScript - язык программирования"},
    {id: 2, title: 'JavaScript 2', body: "JavaScript"},
    {id: 3, title: 'JavaScript 3', body: "Язык программирования"}
  ])

  return (
    <div className="App">
      <form>
        <MyInput type="text" placeholder="Название поста"/>
        <MyInput type="text" placeholder="Описание поста"/>
        <MyButton disabled>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title={"Список постов 1"}/>
    </div>
  );
}

export default App;
