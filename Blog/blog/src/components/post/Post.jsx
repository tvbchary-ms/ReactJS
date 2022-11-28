import { useState } from "react";
import { Link } from "react-router-dom";
import "./post.css";

export default function Post({post}) {
  const PF = "http://localhost:5000/images/"
  
  const [postId] = post._id;
  return (
    
    <div className="post rounded bg-light">
      
     <img className="postImg" 
      src={post.photo ? PF + post.photo : "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}
      alt="Img"/>
      <div className="postInfo">
        <div className="postCats">
          {post.categories && post.categories.map((c,idx)=>(
            <Link to={`/?cat=${c}`} className="link" key={idx}>
            <span className="postCat" >{c}</span>
            </Link>
          ))}
           
           <Link to={`/?cat=`} className="link">
            <span className="postCat">Cricket</span>
            </Link>
        </div>
        <Link to={`/post/${post._id}`} target="_top" className="link">
        <span className="postTitle">  {post.title}  </span>
        </Link> 
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc p-2">{post.desc}</p>
      <p className="text-end "><Link to={`/post/${post._id}`} target="_top" className="link">
        <span>  Read more &gt;&gt;&gt; &nbsp;&nbsp; </span>
        </Link> </p>
    </div>
  );
}