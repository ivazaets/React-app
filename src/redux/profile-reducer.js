const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  myPostsData: [
    { id: 1, message: "Hello, my name Georgia", like: " 15" },
    { id: 1, message: "Hello, my name Valencia", like: " 23" },
    { id: 1, message: "Hello, my name Peter", like: " 9" },
  ],
  newPostText: "It-kamasutra, eeeey!",
};

export const profileReducer = (state = initialState, action) => {
  let stateCopy;
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT:
      stateCopy = {
        ...state,
        newPostText: action.newPost,
      };
      return stateCopy;
    case ADD_POST:
      stateCopy = {
        ...state,
        newPostText: "",
        myPostsData: [
          ...state.myPostsData,
          { id: 1, message: state.newPostText, like: "0" },
        ],
      };
      return stateCopy;
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newPost: text,
  };
};

export default profileReducer;
