import React, { useState } from "react";
import axios from "axios";
import PhotoUser from '../../components/Photos/Photo-user';
import '../../components/Photos/Photouser.css'
import './AddPost.css';

const Post = () => {

    const [content, setContent] = useState("");
    const token = localStorage.getItem("accessToken");

    const handlePost = (e) => {
        e.preventDefault();

        axios({
            method: "post",
            url: 'http://localhost:3000/api/post/addPost',
            data : {
            content,
            },
            headers:{
                "Content-Type": 'application/json',
                "Authorization":  token
            }
        })
     
    }
    return(
        <div className="post">
            <div className="text-post">
                <PhotoUser/>
                    <form id="newPost" className="newPost" onSubmit={handlePost} >
                    <textarea
                        className="postText"
                        placeholder="Ecrivez quelque chose" 
                        onChange={(e) => setContent(e.target.value)}
                        value={content}>   
                    </textarea>
                    <input type="submit" value="Publier" className="button" />
                </form>
            </div>
        </div>
    ) 
    
};
export default Post