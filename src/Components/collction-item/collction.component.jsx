import React from "react";

import "./collction.style.scss";
import Icon from "../icons/Icons.component";

const CollectionItem = ({ id, name, imageUrl, price }) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url( ${imageUrl} )`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name} </span>
        <span className="price">{price} </span>
      
      </div>
    </div>
  );
};

export default CollectionItem;
