import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Settings() {
  const {user, dispatch} = useContext(Context);
  const [file,setFile] = useState(null);
  const [username,setUsername] = useState(user.username);
  const PF = "http://localhost:5000/images/";
  const [email,setEmail] = useState(user.email);
  const [password,setPassword] = useState("");
  const [success,setSucess] = useState(false);

  const submitHandler =async (e) =>{
    e.preventDefault();
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
      
    }
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        alert("File Upload Error");
      }
    }
    try{
      const res = await axios.put("/users/"+user._id, updatedUser);
      setSucess(true);
      dispatch({type: "UPDATE_SUCCESS", payload: res.data});

    }catch(err){
      dispatch({type: "UPDATE_FAILURE"})
      console.log(err);
    }
    
  }


  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={submitHandler}>
          <label>Profile Picture</label>
          <div className="settingsPP">
          <img className="topImg" src={file? URL.createObjectURL(file) : user.profilePic ? PF+ user.profilePic : PF + "nodp.jpg"} alt="User"/>
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              onChange={(e)=>setFile(e.target.files[0])}
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" 
          onChange={(e)=>setUsername(e.target.value)}
          value={username} name="name" />
          <label>Email</label>
          <input 
          onChange={(e)=>setEmail(e.target.value)}
          type="email" value={email} name="email" />
          <label>Password</label>
          <input 
          onChange={(e)=>setPassword(e.target.value)}
          type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
          {success && <span className="text-center mt-2 text-success">Profile Updated Successfully!</span>}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
