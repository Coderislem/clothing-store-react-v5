import React from "react";
import "./menu-item.style.scss";
import { withRouter } from "react-router-dom";
const MenuItem = ({ title, imageUrl, size ,history,match,LinkUrl}) => (
  <div  className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${LinkUrl}`)}>
    <div  className="backgroundImg" style={{backgroundImage: `url(${imageUrl})`}} />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
