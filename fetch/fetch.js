class PostsList extends React.Component{
state = {
    posts:[]
}
fetchPosts = async ()=>{

try{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const postsData =  await response.json()
    console.log(postsData);
    this.setState({
        posts:postsData
    })
}
catch (err){
    console.log(err)
}
    
}
render(){
    return <div>
        <button onClick={()=>{
            this.fetchPosts()

        }}>Fetch</button>
        {this.state.posts.map(post=>{
            return <p key={post.id}>Title - {post.title} id- {post.id} </p>
        })}
    </div>
}


}
ReactDOM.render(<PostsList/>,document.getElementById("container"))