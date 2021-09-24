import React from 'react';
import axios from 'axios';
import createHistory from 'history/createBrowserHistory'

const history = createHistory();
const token = localStorage.getItem('accessToken')
const user = JSON.parse(localStorage.getItem('user'));

const DeletePost =  (props) => {
    const postId = props.id
    console.log(postId);
    const userPost = props.user
    console.log(userPost);
    function handleDelete (e) {
        e.preventDefault();
        axios.delete('http://localhost:3000/api/post/delete',{
            data:{
                id: postId
            },
            headers:{
                'Authorization': token
            }
        })
        history.go(0);

        
    }
    let className = "button";
    if (user === userPost) {
        className += "display";
    }else{
        className += "hide";
    }



    return(
        <button className={className} onClick={handleDelete}>
            Supprimer
        </button>
    )
};

export default DeletePost