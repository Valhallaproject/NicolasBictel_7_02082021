import axios from "axios";
import React, { useState } from "react";
import "./AddComment.css";


const AddComment = (props) => {
    const token =localStorage.getItem('acecssToken');
    const user = JSON.parse(localStorage.getItem('user'));
    const [content, setContent] = useState();
    const postId = props.id;
    

    function handleComment () {
        axios({
            method: "post",
            url: 'http://localhost:3000/api/comment/addComment',
            data : {
                content,
                userId: user,
                postId: postId
            },
            headers:{
                "Content-Type": 'application/json',
                "Authorization":  token
            }
        }) 
    }
   
    return(
        <div className="comment">
            <div className="text-comment">
                    <form id="newComment" className="newComment" onSubmit={handleComment} >
                    <textarea
                        className="commentText"
                        placeholder="Votre commentaire"
                        onChange={(e) => setContent(e.target.value)}
                        value={content} 
                    >
                    </textarea>
                    <input type="submit" value="Commenter" className="button" />
                </form>
            </div>
        </div>
    ) 


};

export default AddComment