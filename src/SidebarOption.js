import React from "react";
import "./SidebarOption.css";
import { useHistory } from "react-router-dom";
import db from "./firebase";

function SidebarOption({ Iconname, title, id, addChanelOption }) {
  const collectionName = "room";
  const history = useHistory();
  const addchanel = () => {
    const channelName = prompt("Enter the name of your channel");
    if (channelName) {
      const channelObj = {
        name: channelName,
      };
      db.collection(collectionName).add(channelObj);
    }
  };

  const selectOption = () => {
    if (id) {
      history.push(`/slack_clone_react/${id}`);
    } else {
      history.push(title);
    }
  };

  const respond = () => {
    if (addChanelOption) {
      addchanel();
    } else {
      selectOption();
    }
  };

  const Display = () => {
    if (Iconname) {
      return (
        <div className="conAndTitle">
          <Iconname />
          <h3>{title}</h3>
        </div>
      );
    } else {
      return (
        <div className="titleOnly">
          <h3>#</h3>
          <h3 className="tit">{title}</h3>
        </div>
      );
    }
  };
  return (
    <div className="sideBarOption" onClick={respond}>
      <Display />
    </div>
  );
}

export default SidebarOption;
