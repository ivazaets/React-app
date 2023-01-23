import React from "react";
import style from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={style.dialog}>
      <NavLink
        to={"/dialogs/" + props.id}
        className={(activeLink) =>
          activeLink.isActive ? style.active : style.item
        }
      >
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;

