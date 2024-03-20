import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'; 
import { faFacebook } from '@fortawesome/free-brands-svg-icons'; 

library.add(faGoogle);


const Icon=({name,props,style})=>{

    return<FontAwesomeIcon icon={name} style={style} {...props} className="fa-2x"/>
}

export default Icon;