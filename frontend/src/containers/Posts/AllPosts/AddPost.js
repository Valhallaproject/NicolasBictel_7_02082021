import React, { useState } from "react";
import axios from "axios";
import PhotoUser from '../../../components/Photos/Photo-user/Photo-user';
import createHistory from 'history/createBrowserHistory'
import '../../../components/Photos/Photo-user/Photouser.css'
import './AddPost.css';

const Post = (e) => {

    const history = createHistory();
    const [content, setContent] = useState("");
    const [media, setMedia] = useState()
    const [preview, setPreview] = useState()
    const token = localStorage.getItem("accessToken");
    const user = JSON.parse(localStorage.getItem('user'));

const handleChange = (e) => {
    setMedia(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]))
}

    const handlePost = (e) => {
        e.preventDefault();
        console.log(media);
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
            const data = new FormData();
            data.append("userId", user)
            data.append("content", content);
            data.append("photo", media)
            console.log(media)
            axios({
                method: "post",
                url: 'http://localhost:3000/api/post/addPost',
                data,
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
                    <div className="media">
                            <img id="post" src={preview}alt=""/>
                    </div>
                    <div className="action">
                    <label for="file" className="button">
                        <input 
                            id="file"
                            type="file"
                            name="photo"
                            onChange={handleChange}
                        />Média
                    </label>
                    <input type="submit" value="Publier" className="button" />
                    </div>
                </form>
            </div>
        </div>
    ) 
};
export default Post