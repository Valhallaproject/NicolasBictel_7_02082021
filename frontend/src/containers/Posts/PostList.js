const PostList = ( {posts}) => {
    return [
        <>
            {posts.map((post) => (
                <li className="postItem" key={post.id}>
                    {post.content }
                </li>
            ))}
        </>
    ]
}
export default PostList