import React from "react";
import "./chatList.css";
function ChatList() {
  return (
    <div className="chatlist">
      <div className="search">
        <div className="searchBar">
          <input type="text" className="searchInput" placeholder="Search" />
          <img src="./search.png" alt="search" />
        </div>
        <img src="./plus.png" className="add" />
      </div>
    </div>
  );
}

export default ChatList;
