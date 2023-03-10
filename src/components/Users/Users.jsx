import React from "react";
import style from "./Users.module.css";

let Users = (props) => {
  return <div> 
    {
      props.users.map(u => <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={style.usersPhoto}/>
            </div>
            <div>
              {u.followed ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.city}</div>
            </span>
          </span>
        </div>
      )
  };
  </div>
};

export default Users;
