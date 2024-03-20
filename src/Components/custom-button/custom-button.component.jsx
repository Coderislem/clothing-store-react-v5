import React from "react";

import './custom-button.styles.scss'

const CustomeButton=({children,normaly,...otherprops})=>{

    return(
        <button className={`custom-button ${normaly}`} {...otherprops} > 
        {children}
        </button>
    )
}

export default CustomeButton;