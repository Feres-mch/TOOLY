import React from "react";
import "./Sidebar.css";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import feres from "../photos/feres.jpg";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <ProSidebar className="test">
      <Menu iconShape="square">
        <MenuItem className="personalinfo">
          <img className="img" src={feres} alt="feres" />
          <p className="name">Feres Mechmech</p>
          <p className="job">Agent</p>
        </MenuItem>
        <hr className="hr" />
        <MenuItem>Edit profile</MenuItem>
        <SubMenu title="Clients">
          <MenuItem>Active</MenuItem>
          <MenuItem>New</MenuItem>
          <MenuItem>Banned</MenuItem>
        </SubMenu>

        <MenuItem>
          Claims
          <Link to="/claim" />
        </MenuItem>

        <SubMenu title="Orders">
          <MenuItem>Done</MenuItem>
          <MenuItem>New</MenuItem>
          <MenuItem>In progress</MenuItem>
        </SubMenu>

        <MenuItem className="last">
          Sponsors
          <Link to="/sponsors" />
        </MenuItem>

        <MenuItem></MenuItem>
      </Menu>
    </ProSidebar>
  );
}

export default Sidebar;
