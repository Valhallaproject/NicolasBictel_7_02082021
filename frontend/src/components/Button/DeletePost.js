import React, {useState} from 'react';
import axios from 'axios';
import createHistory from 'history/createBrowserHistory'
import iconRemove from "../../image/icon-remove.png";

const history = createHistory();
const token = localStorage.getItem('accessToken')
const user = JSON.parse(localStorage.getItem('user'));

const DeletePost =  (props) => {
    const postId = props.id;
    const userPost = props.user;
    const [role, setRole] = useState();
    
        axios.get('http://localhost:3000/api/user/userId',{
            params:{
                id : user} 
        },{
            headers:{
                "Content-Type": 'application/json',
                "Authorization": token
            }
        })
        .then((response) =>{
                setRole(response.data.admin)
        })
    
    
    function HandleDelete (e) {
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
    if (user === userPost || role === 'admin') {
        className += "display";
    }else{
        className += "hide";
    }

    return(
        <button className={className} onClick={HandleDelete}>
            <img src={iconRemove} alt="bouton supprimer"/>
        </button>
    )
};

export default DeletePost