import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
    return (
        <div>
    <div className={style.item}>
        {props.message}
    </div>
    <div className={style.likeButton}>
       <span>like</span> {props.like}
    </div>
    </div>

    
     
    
  )
};

export default Post;