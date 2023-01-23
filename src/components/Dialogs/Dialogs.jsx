import React from "react";
import DialogItem from "./DialogItem/DialogItem"
import style from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let state = props.dialogsPage;

const dialogsElement = state.dialogsData.map ( dialog => <DialogItem name={dialog.name} id={dialog.id} />);
const messagesElement = state.messagesData.map ( message => <Message message={message.message} />);
const newPostTextTwo = state.newPostTextTwo;

let createRefTwo = React.createRef();

let clickOnMeTwo = () => {
  props.addMessage();
};

let onPostChancgeTwo = () => {
  let text = createRefTwo.current.value;
  props.updateNewPostTextTwo(text);
};
  return (
    <div className={style.dialogs}>
      <button onClick={clickOnMeTwo}>Click on me</button>
    <textarea onChange={onPostChancgeTwo} value={newPostTextTwo} ref={createRefTwo} />
      <div className={style.dialogs_item}>
      { dialogsElement }
      </div>
      <div className={style.messages}>
      { messagesElement }
      </div>
    </div>
  );
};

export default Dialogs;
