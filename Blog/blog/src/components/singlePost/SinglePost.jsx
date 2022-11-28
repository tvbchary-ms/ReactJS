import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./singlePost.css";
import axios from "axios";
import { Context } from "../../context/Context";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post,setPost] = useState({});
  const {user} = useContext(Context);
  const PF = "http://localhost:5000/images/"
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const [postOwner, setPostOwner] = useState("");

  useEffect(()=>{
    const getPost = async()=>{
      const res = await axios.get("/posts/"+path);
      setPost(res.data.post);
      setPostOwner(res.data.others);
      setTitle(res.data.post.title);
      setDesc(res.data.post.desc);
     
    }
    
    getPost();
  },[path]);

  const deleteHandler = async() =>{
   
    if( window.confirm("Are you sure?"))
      {try{
         await axios.delete("/posts/" + path,{
          data: { username: user.username},
        })
         window.location.replace("/")       
        
      }catch(err){
        alert("Deletion Failed"+err)
      }}
  }

  const updateHandler = async () =>{
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false)
      // document.location.reload();
    } catch (err) {
      alert("There was an error")
    }

  }



  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={post.photo ? PF + post.photo : "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}
          alt=""
        />
        {
          updateMode ? <input type="text"
          autoFocus={true}
          className="singlePostTitleInput" 
          onChange={(e)=>setTitle(e.target.value)}
          value={title}/> : (
            <h1 className="singlePostTitle">
         {title}
         {post.userId === user?._id &&
         <div className="singlePostEdit">
         <i className="singlePostIcon far fa-edit" onClick={()=> setUpdateMode(true)}></i>
         <i className="singlePostIcon far fa-trash-alt" onClick={deleteHandler}></i>
       </div>}
        </h1>
          )
        }
        <div className="singlePostInfo">
          <span>
            Author: &nbsp;
            
              <Link className="link" to={`/?user=${post.username}`}>
              <b className="singlePostAuthor">  {postOwner.username} </b>
              
              </Link>
            
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        {
          updateMode ? <textarea value={desc} 
          onChange={(e)=>setDesc(e.target.value)}
          className="singlePostDescInput "/> : (
            <p className="singlePostDesc">
            {desc}
          </p>
          )
        }
        {updateMode && (
          <button className="singlePostButton" onClick={updateHandler}>
            Update
          </button>
        )}     
      </div>
    </div>
  );
}
