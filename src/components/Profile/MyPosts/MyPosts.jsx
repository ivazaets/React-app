import React from "react"
import style from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = (props) => {

  let state = props.profilePage;

let myPostsElement = state.myPostsData.map ( p => <Post message={p.message} id={p.id} like={p.like}/>);;
let newPostText = state.newPostText;

let createRef = React.createRef();

let clickOnMeTwo = () => {
  props.addPost();
};

let onPostChancge = () => {
  let text = createRef.current.value;
  props.updateNewPostText(text);
};
  return (
    <div className={style.dialogs}>
      <button onClick={clickOnMeTwo}>Click on me</button>
    <textarea onChange={onPostChancge} value={newPostText} ref={createRef} />
      <div className={style.dialogs_item}>
      { myPostsElement }
      </div>
    </div>
  );
};

export default MyPosts;