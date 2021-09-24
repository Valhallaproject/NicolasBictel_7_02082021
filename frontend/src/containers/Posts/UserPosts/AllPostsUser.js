import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UserPostList from './UserPostList';


function PostUser ()  {
    const [ userPosts, setUserPosts] = useState([]);
    const token = localStorage.getItem('accessToken')
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {    
    axios.get('http://localhost:3000/api/post/userPost',{
        params: {
            userId: user
        }
    },{
        headers:{
            "Content-Type": 'application/json',
            "Authorization":  token
        }
    })
        .then((response) => {
            setUserPosts(response.data)
            console.log(response);

        })
    },[token, user]);
    return(
        <div className="feedUser">
            {userPosts ? <UserPostList posts={userPosts} /> : userPosts}
        </div>
    )
};

export default PostUser