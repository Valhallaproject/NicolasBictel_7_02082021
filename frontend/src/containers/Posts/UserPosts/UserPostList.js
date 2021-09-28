import DeletePost from "../../../components/Button/DeletePost"
import AddComment from "../Comments/AddComment"
import DisplayComments from "../Comments/DisplayComments"

const UserPostList = ( {posts}) => {
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
                    <div>
                        <AddComment id={post.id} user={post.userId}/>
                    </div>
                    <div className="line"></div><br/>
                    <div>
                        <DisplayComments postId={post.id}/>
                    </div>
                </li>
            )).reverse()}
        </>
    ]
}
export default UserPostList