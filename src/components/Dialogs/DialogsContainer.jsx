import React from "react";
import { addMessageActionCreator } from "../../redux/dialogs-reducer";
import { updateNewPostTextTwoActionCreator } from "../../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsPage;

        let clickOnMeTwo = () => {
          store.dispatch(addMessageActionCreator());
        };

        let onPostChancgeTwo = (text) => {
          store.dispatch(updateNewPostTextTwoActionCreator(text));
        };
        return (
          <Dialogs
            updateNewPostTextTwo={onPostChancgeTwo}
            addMessage={clickOnMeTwo}
            dialogsPage={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
