import React from "react";
import style from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import Friends from "../Friends/Friends";

const Nav = () => {
  return (
    <nav className={style.nav}>
      <div>
        <NavLink
          to="/Profile"
          className={(activeLink) =>
            activeLink.isActive ? style.active : style.item
          }
        >
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/Dialogs"
          className={(activeLink) =>
            activeLink.isActive ? style.active : style.item
          }
        >
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/News"
          className={(activeLink) =>
            activeLink.isActive ? style.active : style.item
          }
        >
          New
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/Music"
          className={(activeLink) =>
            activeLink.isActive ? style.active : style.item
          }
        >
          Music
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/Settings"
          className={(activeLink) =>
            activeLink.isActive ? style.active : style.item
          }
        >
          Settings
        </NavLink>
      </div>

      <div>
        <Friends />
      </div>
    </nav>
  );
};

export default Nav;
