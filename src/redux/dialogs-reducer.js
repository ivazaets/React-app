const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_POST_TEXT_TWO = "UPDATE-NWE-POST-TEXT";

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
}

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
    const newMessage = {
      id: 1,
      message: state.newPostTextTwo,
    };
    state.messagesData.push(newMessage);
    state.newPostTextTwo = "";
    case UPDATE_NEW_POST_TEXT_TWO:
    state.newPostTextTwo = action.newTextTwo;
  }
  return state;
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
