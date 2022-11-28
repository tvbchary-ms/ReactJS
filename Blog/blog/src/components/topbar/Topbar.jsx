import React from 'react';
import './topbar.css';
import { Link } from "react-router-dom";
import avatar from '../images/avatar.jpg';
import {useContext} from 'react';
import { Context } from '../../context/Context';

const Topbar = () => {
  const {user, dispatch} = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const logoutHandler = ()=>{
    dispatch({type: "LOGOUT"})
   
  }
 
  return (<div  className='top'>
     <div className='topLeft'>
     <i className="fab fa-facebook-square topIcon"></i>
     <i className="fab fa-pinterest-square topIcon"></i>
     <i className="fab fa-github-square topIcon"></i>
     <i className="fab fa-linkedin topIcon"></i>
     </div>
     <div className='topCenter'>
         <ul className="topList">
             <li className="topListItem">
               <Link className='link' to="/" target={"_top"}>Home</Link>
             </li>
             <li className="topListItem">About</li>
             <li className="topListItem">Contact</li>
             <li className="topListItem">
               <Link className='link' to="/write">Write</Link>
               </li>             
             
         </ul>
     </div>
     <div className='topRight'>
    {
      user ? (<>
      <Link to={"/settings"}>
      <img className="topImg" src={user.profilePic ? PF+user.profilePic : PF + "nodp.jpg"} alt="User"/>
      </Link>
      <ul className="topList">
       <li className="topListItem" >
               <Link className='link' to='/login' onClick={logoutHandler}>Logout</Link>
               </li>
       </ul>
      </>) : (<>
        <ul className="topList">
            <li className="topListItem" >
               <Link className='link' to="/login" >Login</Link>
            </li>
            <li className="topListItem" >
               <Link className='link' to="/register" >Register</Link>
            </li>
       </ul>
      </>)
    }
     <i className="fas fa-search topSearchIcon"></i>
     
     </div>
  </div>);
};

export default Topbar;
