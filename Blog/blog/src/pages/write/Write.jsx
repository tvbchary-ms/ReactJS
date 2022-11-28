import { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import {Context} from "../../context/Context";

export default function Write() {

  const [title,setTitle] = useState("");
  const [desc,setDesc] = useState("");
  const [file,setFile] = useState(null);
  const {user} = useContext(Context)


  const submitHandler =async (e) =>{
    e.preventDefault();
    const newPost = {
      title,
      userId: user._id,
      desc,
    }
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        alert("File Upload Error");
      }
    }else{
      newPost.photo="";
    }
    
    try{
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    }catch(err){
      alert("Upload Post Error");
    }
    
  }

  return (
    <div className="write">
     {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={submitHandler}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" 
            onChange={(e)=>setFile(e.target.files[0])}
            type="file" style={{ display: "none" }} />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            onChange={(e)=>setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            onChange={(e)=>setDesc(e.target.value)}
            
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
