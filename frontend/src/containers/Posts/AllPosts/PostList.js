import DeletePost from "../../../components/Button/DeletePost"
const PostList = ( {posts}) => {
    return [
        <>
            {posts.map((post) => (
                <li className="postItem" key= {post.id}>
                    <div className="headerPost">
                        <p className="postUsername">Publié par<span className="postName"> {post.user.firstName} {post.user.lastName}</span></p><br/> 
                        <DeletePost id={post.id} user={post.userId}/>
                    </div>
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