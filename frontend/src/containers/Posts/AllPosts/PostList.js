import React from 'react'
import { Link } from 'react-router-dom';
import DeletePost from "../../../components/Button/DeletePost";
import AddComment from "../Comments/AddComment";
import DisplayComments from "../Comments/DisplayComments";

const PostList = ( {posts}) => { 
    
    return ( 
        <>
            {posts.map((post) => (
                <li className="postItem" key= {post.id}>
                    <div className="headerPost">
                        <p className="postUsername">Publié par<span> </span>  
                            <Link to={{pathname:"/Profile-utlisateur", state:post.userId}}className="postName">
                                {post.user.firstName} {post.user.lastName}
                            </Link>
                        </p><br/> 
                        <DeletePost id={post.id} user={post.userId} />
                    </div>
                    <div className="line"></div><br/>
                    
                    <p className="postContent">
                        {post.content }<br/>
                        
                    </p><br/><br/>
                    <div className="media">
                        <img type="image" src={post.media} alt=""/>
                    </div>
                    <div>
                        <AddComment id={post.id} user={post.userId} />
                    </div>
                    <div className="line"></div><br/>
                    <div>
                        <DisplayComments  postId={post.id}/>
                    </div>
                </li>
            )).reverse()}
        </>
    )
}
export default PostList


