import React from "react";
import "./preview-collection.style.scss";
import CollectionItem from "../collction-item/collction.component";
const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()} </h1>
      <div className="preview">
        {items.filter((item, index) => index < 4)
          .map(({id,...otherCollectionProps})=> (
        
            <CollectionItem key={id} {...otherCollectionProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
