import React from "react";
import DialogItem from "./DialogItem/DialogItem"
import style from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let state = props.dialogsPage;

let dialogsElement = state.dialogsData.map ( d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
let messagesElement = state.messagesData.map ( m => <Message message={m.message} key={m.id}/>);
let newPostTextTwo = state.newPostTextTwo;

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
