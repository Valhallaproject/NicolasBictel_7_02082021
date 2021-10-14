import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import './DisplayComment.css'
import DeleteComment from "../../../components/Button/DeleteComment";

const DisplayComments =   (props) => {
    const [ commentPost, setCommentPost] =  useState([]);
    const token = localStorage.getItem("accessToken"); 
    const id= props.postId

    useEffect(()  =>  {
        axios.get('http://localhost:3000/api/comment/postId', {
        params: {
            postId : id
        },
        headers:{
            "Content-Type": 'application/json',
            "Authorization": token
        }
        })
        .then((response) =>{
            setCommentPost(response.data)
        })
    },[token, id]);

    return(
        <div className="feedComment" >
            {commentPost.map((comment) => (
                <li className="commentItem" key= {comment.id}>
                    <DeleteComment id={comment.id} user={comment.userId} />
                    <p className="commentUsername">
                    <Link to={{pathname:"/Profile-utlisateur", state:comment.userId}}className="commentName">
                        {comment.user.firstName} {comment.user.lastName}         
                    </Link><span > </span>
                    a commenté :
                    </p><br/> 
                    <p className="commentContent">
                        {comment.content }
                    </p>
                    
                </li>
            )).reverse()}
        </div>
    )
};
export default DisplayComments

//className="commentName"