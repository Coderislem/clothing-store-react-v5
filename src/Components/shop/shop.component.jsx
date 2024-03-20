import React from "react";
import SHOP_DATA from './shop.data'
import CollectionPreview from "../previw-collction/preview-collection.component";
class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collction: SHOP_DATA
    };
  }
   render() {
 
 const {collction}=this.state;


    
    return (
    
      <div className="shop-page">
       
        {
        collction.map(({id,...otherCollction })=> (
          <CollectionPreview key={id} {...otherCollction} />
        ))
        }
      </div>
    );
  }
}

export default Shop;
