const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  myPostsData: [
    { id: 1, message: "Hello, my name Georgia", like: " 15" },
    { id: 1, message: "Hello, my name Valencia", like: " 23" },
    { id: 1, message: "Hello, my name Peter", like: " 9" },
  ],
  newPostText: "It-kamasutra, eeeey!",
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
    const newPost = {
      id: 1,
      message: state.newPostText,
    };
    state.messagesData.push(newPost);
    state.newPostText = "";
    case UPDATE_NEW_POST_TEXT:
    state.newPostText = action.newText;
  }
  return state;
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export default profileReducer;
