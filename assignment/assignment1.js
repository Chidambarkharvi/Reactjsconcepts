class PostsList extends React.Component {
    state = {
        posts: []
    }
    fetchPosts = async () => {
        try {
            const response = await  fetch('https://jsonplaceholder.typicode.com/users')
            const postsData = await response.json()
            console.log(postsData);
            this.setState({
                posts: postsData
            })
        } catch (err) {
            console.log(err);
        }
    }
    render() {
        return <div>
        <div >
            <button style={{color:"red",padding:"10px",}} onClick={() => {
                this.fetchPosts()
            }}>Fetch</button>
            </div>
            {this.state.posts.map(post => {
                return <div className="card" style={{width: "25%",backgroundColor:"lightgray",border:"1px solid red",height : "200px",textAlign:"center",float:"left",paddingTop:"20px",margin:"20px"}}>
                   <h1 key={post.id}>
                   <h3> Name: <h5>  {post.name}</h5></h3>
                   <h6> userName: {post.username}</h6>
                   <h6>Email: {post.email}</h6>
                   <h6>City: {post.address.city}</h6>
                   </h1>




                   
                </div>
            })}      
        </div>
    }
}
ReactDOM.render(<PostsList />,
    document.getElementById('container'))