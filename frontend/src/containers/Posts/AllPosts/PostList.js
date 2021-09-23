const PostList = ( {posts, users}) => {
    return [
        <>
            {posts.map((post) => (
                <li className="postItem" key= {post.id}>
                    <p className="postUsername">Publié par<span className="postName"> {post.user.firstName} {post.user.lastName}</span></p><br/> 
                    <div className="line"></div><br/>
                    <p className="postContent">
                        {post.content }
                    </p>
                </li>
            )).reverse()}
        </>
    ]
}
export default PostList


//