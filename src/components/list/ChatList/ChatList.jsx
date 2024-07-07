import React from "react";
import "./chatList.css";
function ChatList() {
  return (
    <div className="chatlist">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="search" />
          <input type="text" className="searchInput" placeholder="Search" />
        </div>
        <img src="./plus.png" className="add" />
      </div>
    </div>
  );
}

export default ChatList;
