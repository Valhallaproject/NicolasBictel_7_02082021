import React, { useState, useEffect } from "react";
import axios from "axios";
import PostList from "./PostList";
import './PostList.css'

function AllPost (){
    const [ posts, setPosts] = useState([]);
    const token = localStorage.getItem("accessToken"); 
    useEffect(() => {
        axios.get('http://localhost:3000/api/post/allPost', {
        headers:{
            "Content-Type": 'application/json',
            "Authorization": token
        }
        })
        .then((response) =>{
            setPosts(response.data)
            console.log(response.data);
        })
    },[token]);
    return(
        <div className="feed" >
            {posts ? <PostList posts={posts} /> : posts}
        </div>
    )
};
export default AllPost
