const PostList = ( {posts}) => {
    return [
        <>
            {posts.map((post) => (
                <li className="postItem" >
                    <p className="postUsername">Publié par</p><br/> 
                    <div className="line"></div><br/>
                    <p className="postContent" key={post.id}>
                        {post.content } 
                    </p>
                </li>
            )).reverse()}
        </>
    ]
}
export default PostList