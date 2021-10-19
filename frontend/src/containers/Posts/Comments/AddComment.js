import axios from "axios";
import React, { useState } from "react";
import createHistory from 'history/createBrowserHistory'
import "./AddComment.css";

const history = createHistory();
const AddComment =  (props) => {
    
    const token =localStorage.getItem('accessToken');
    const user = JSON.parse(localStorage.getItem('user'));
    const [content, setContent] = useState();
    const postId = props.id;
    
    function HandleComment (e){ 
        axios({
            method: "post",
            url: 'http://localhost:3001/api/comment/addComment',
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
        .then((response) =>{
            setContent("") ;
            history.go(0)
        })
        e.preventDefault();
    } 
    return(
        <div className="comment">
            <div className="text-comment">
                    <form id="newComment" className="newComment" onSubmit={HandleComment} >
                    <textarea
                        className="commentText"
                        placeholder="Votre commentaire"
                        onChange={(e) => setContent(e.target.value)}
                        value={content} 
                    >
                    </textarea>
                    <input type="submit"  className="button" value="commenter"/>
                </form>
            </div>
        </div>
    ) 
};

export default AddComment