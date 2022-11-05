import React from "react";
import "./menu-item.scss";
import withRouter from "../../hooks/withRouter";
import { useNavigate } from "react-router-dom";

const MenuItem = ({ title, imgUrl, size, linkUrl }) => {
  let navigate = useNavigate();
  return (
    <div className={`${size} menu-item`} onClick={() => navigate(`${linkUrl}`)}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      >
        <div className="content">
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
