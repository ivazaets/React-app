import React from "react";
import MyPosts from "./MyPosts";
import addPostActionCreator from "./../../../redux/profile-reducer";
import updateNewPostTextActionCreator from "./../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let clickOnMe = () => {
          store.dispatch(addPostActionCreator());
        };

        let onPostChancge = (text) => {
          let action = updateNewPostTextActionCreator(text);
          store.dispatch(action);
        };

        return (
          <MyPosts
            updateNewPostText={onPostChancge}
            addPost={clickOnMe}
            myPostsData={state.profilePage.myPostsData}
            newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
