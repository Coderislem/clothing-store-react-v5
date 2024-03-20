
import React from "react";
 import './header.style.scss';
 import {Link} from 'react-router-dom'
 import {ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from "../firebase/firebase.utils";


 const Header=(props)=>{

    return (
        <div className="header">
         <Link to="/"  className="logo-contianer">
         <Logo className="logo" />
         </Link>

         <div className="options">
            <Link to='/shop' className="option">SHOP</Link>
            <Link to='/conatct' className="option">CONTACT</Link>
            {
               props.currentUser ?
               <div className="option" onClick={()=> auth.signOut()}>SIGN OUT</div>
               :
               <Link className="option" to="/sign" >SIGN IN</Link>
            }
         </div>

        </div>
    )
 }

 export default Header;