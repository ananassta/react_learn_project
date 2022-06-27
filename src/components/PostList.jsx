import React from "react";
import PostItem from "./PostItem";

const PostList = ({posts, title}) => {
    return (
        // в компоненте может быть только один корневой элемент
        <div> 
        <h1 style={{textAlign: "center"}}>{title}</h1>
        {posts.map(post => 
          <PostItem post={post} key={post.id}/>
          // ключи должны быть статичными и неизменяемыми, поэтому id использовать не рекомендуется
          // т.к. они могут изменяться
        )}
        </div>
    )
};

export default PostList;

