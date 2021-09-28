import React, {useState} from 'react';
import axios from 'axios';
import createHistory from 'history/createBrowserHistory'
import iconRemove from "../../images/icon-remove.png";

const history = createHistory();
const token = localStorage.getItem('accessToken')
const user = JSON.parse(localStorage.getItem('user'));

const DeleteComment =  (props) => {
    const commentId = props.id
    const userComment = props.user
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
    function handleDelete (e) {
        e.preventDefault();
        axios.delete('http://localhost:3000/api/comment/delete',{
            data:{
                id: commentId
            },
            headers:{
                'Authorization': token
            }
        })
        history.go(0);
    }
    let className = "buttonC";
    
        if ( user === userComment || role === 'admin') {
            className += "display";
        }else{
            className += "hide";
        }

   



    return(
        <button className={className} onClick={handleDelete}>
            <img src={iconRemove} alt="bouton supprimer"/>
        </button>
    )
};

export default DeleteComment