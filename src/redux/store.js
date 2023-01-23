import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'

let store = {
  _state: {
    profilePage: {
      myPostsData: [
        { id: 1, message: "Hello, my name Georgia", like: " 15" },
        { id: 1, message: "Hello, my name Valencia", like: " 23" },
        { id: 1, message: "Hello, my name Peter", like: " 9" },
      ],
      newPostText: "It-kamasutra, eeeey!",
    },

    dialogsPage: {
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
    },
  },
  _renderTree() {
    console.log("hello");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._renderTree = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._renderTree(this._state);
  }
};

export default store;
