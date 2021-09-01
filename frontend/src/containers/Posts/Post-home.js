import React, { useState } from "react";
import axios from "axios";
import Photouser from '../../components/Photos/Photo-user';
import './Post-home.css';

const Post = () => {

    const [content, setContent] = useState("");

    const handlePost = (e) => {
        e.preventDefault();
        axios({
            method: "post",
            url: 'http://localhost:3000/api/post/addPost',
            data : {
            content,
           
            }
            
        })
    }
    return(
        <div className="post">
        <div className="text-post">
            <Photouser
            />
            
            <form id="newPost" className="newPost" onSubmit={handlePost}>
            <textarea
            placeholder="Ecrivez quelque chose" 
            onChange={(e) => setContent(e.target.value)}
            value={content}>   
            </textarea>
            <input type="submit" value="Publier" className="button" />
        </form></div>
        <div className="action">
        
        </div>
        
        </div>
    ) 
    
};
export default Post