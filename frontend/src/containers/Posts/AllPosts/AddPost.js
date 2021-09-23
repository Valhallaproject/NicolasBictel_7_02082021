import React, { useState } from "react";
import axios from "axios";
import PhotoUser from '../../../components/Photos/Photo-user';
import createHistory from 'history/createBrowserHistory'
import '../../../components/Photos/Photouser.css'
import './AddPost.css';

const Post = () => {

    const history = createHistory();
    const [content, setContent] = useState("");
    const token = localStorage.getItem("accessToken");
    const user = JSON.parse(localStorage.getItem('user'));
    const handlePost = (e) => {
        e.preventDefault();
        axios.get('http://localhost:3000/api/user/userId',{
            params: {
                id: user
            }
        },{
            headers:{
                "Content-Type": 'application/json',
                "Authorization":  token
            }
        })
        .then((response) => {
            console.log(response);
            axios({
                method: "post",
                url: 'http://localhost:3000/api/post/addPost',
                data : {
                    content,
                    userId: user
                },
                headers:{
                    "Content-Type": 'application/json',
                    "Authorization":  token
                }
            })
            .then((response) => {
                setContent('')
                history.go(0)
            })
            console.log(response.data)
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