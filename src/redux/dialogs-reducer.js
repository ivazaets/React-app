const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_POST_TEXT_TWO = "UPDATE-NEW-MESSAGE";

let initialState = {
  messagesData: [
    { id: 1, message: "Ooops, sorry, baby" },
    { id: 2, message: "Hello, how are you?" },
    { id: 3, message: "Ahahahahahaa, it's sooo funny" },
    { id: 4, message: "You are very beautiful today" },
  ],

  newPostTextTwo: "Hello my dear friend! How are you?",

  dialogsData: [
    { id: 1, name: "Ira" },
    { id: 2, name: "Andrew" },
    { id: 3, name: "Olya" },
    { id: 4, name: "Alex" },
  ],
};

export const dialogsReducer = (state = initialState, action) => {
  let stateCopy;
  switch (action.type) {
    case ADD_MESSAGE:
      stateCopy = {
        ...state,
        messagesData: [...state.messagesData, {id: 1, message: state.newPostTextTwo}],
        newPostTextTwo: ""
      };
      return stateCopy;
    case UPDATE_NEW_POST_TEXT_TWO:
      stateCopy = {
        ...state,
        newPostTextTwo: action.newTextTwo
      };
      return stateCopy;
    default:
      return state;
  }
};

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export const updateNewPostTextTwoActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT_TWO,
    newTextTwo: text,
  };
};

export default dialogsReducer;
