import "./login.css";
import { Link } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";



export default function Login() {

  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const [error,setError] = useState(false);


  const submitHandler = async (e) =>{
    setError(false);
    e.preventDefault();
    dispatch({type: "LOGIN_START"});
    
    try{
     
      try{
        const res = await axios.post("/auth/login",{
          username: userRef.current.value,
          password: passwordRef.current.value,
        })
        dispatch({type:"LOGIN_SUCCESS", payload: res.data})
      }catch(err){
        setError(true);
        dispatch({type:"LOGIN_FAILURE"})
      }  
    }catch(err){
     alert("Some other error");
    }
  }

return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={submitHandler}>
        <label>Username</label>
        <input className="loginInput"
         type="text" placeholder="Enter your username..."
         ref={userRef} />
        <label>Password</label>
        <input className="loginInput" 
        type="password" placeholder="Enter your password..."
        ref={passwordRef}
        />
          <button className="loginButton" type="submit" disabled={isFetching}>
            Login
          </button>
      </form>
        <button className="loginRegisterButton">
           <Link className='link' to="/register">Register</Link>
        </button>
        {error && <span className="text-danger mt-2">Check your credentials</span>}
    </div>
  );
}
