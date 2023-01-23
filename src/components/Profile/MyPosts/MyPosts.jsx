import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Posts/Post";

const  MyPosts = (props) => {

  const myPostElement = props.myPostsData.map ( post => <Post message={post.message} like={post.like} />);
  
  let createRef = React.createRef();

  let clickOnMe = () => {
    //props.dispatch (addPostActionCreator());
    props.addPost ();
  };

  let onPostChancge = () => {
    let text = createRef.current.value;
    props.updateNewPostText ();
   // props.dispatch (updateNewPostTextActionCreator(text));
  };

    return (
    <div className={style.postBlock}> 
        My Posts
    <div>New post</div>
    <button onClick={clickOnMe}>Click on me</button>
    <textarea onChange={onPostChancge} value={props.newPostText} ref={createRef} />
    <div className={style.posts}>
     { myPostElement }
    </div>
    </div>
    )
};



export default MyPosts;