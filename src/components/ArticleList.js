const ArticleList = ({props:{posts}})=> <article>{posts.map(post=>{
    return(
        <>
        <h3>{post.title}</h3>
        <small>{post.date="January 1, 1970"}</small>
        <p>{post.preview}</p>
        </>
        
    )
})}</article>

export default ArticleList;