class PostDetail extends React.Component {
  render() {
  
    const { id, body, title, userId } = this.props.selectedPostData;
    return (
      <div style={{border:"2px solid black",padding:"15px",color:"white",backgroundColor:"black",borderRadius:"10px"}}>
        <p> ID : {id}</p>
        <p> Title : {title}</p>

        <p> Body : {body}</p>

        <button onClick={() => this.props.fetchPosts(id)}>Delete</button>
      </div>
    );
  }
}

class PostsList extends React.Component {
  state = {
    posts: [],
    loading: false,
    showDetails: false,
    selectedPostData: null,
  };
  fetchPosts = async () => {
    this.setState({ loading: true });
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const postsData = await response.json();
      console.log(postsData);
      this.setState({ loading: false,
        posts: postsData,
      });
    } catch (err) {
      console.log(err);
      this.setState({ loading: false });
    }
  };

  deletePost = (postId) => {
    const index = this.state.posts.findIndex((post) => {
      return post.id === postId;
    });
    console.log(index);
    const postsCopy = [...this.state.posts];
    postsCopy.splice(index, 1);
    this.setState({
      posts: postsCopy,
    });
  };

  displaydetailPost = (selectedPost) => {
    this.setState({
      showDetailPost: true,
      selectedPostData: selectedPost,
    });
    console.log(selectedPost);
  };

  render() {
    return (
      <div style={{ display: "flex" }}>
        <div> 
          <button  style={{border:"1px solid black",padding:"5px",marginLeft:"90px",marginTop:"30px"}} disabled={this.state.loading}
            onClick={() => {
              this.fetchPosts();
            }}
          >
            Fetch
          </button>

          {this.state.posts.map((post) => {
            return (
              <div
                key={post.id}
                style={{
                  border: "1px solid grey",padding:"15px",borderRadius:"10px", backgroundColor:"lightgray", outline:"2px solid white",
                  margin: "10px 30px 10px 0px",
                  width: 200,
                  cursor: "pointer",
                }}
                onClick={() => {
                  this.displaydetailPost(post);
                  // console.log(post, "postt==>");
                }}
              >
                <p>Title-{post.title}</p>

                <p>
                  {/* Title - {post.title}  */}
                  id- {post.id}
                </p>

                {/* <button
                  onClick={() => {
                    this.deletePost(post.id);
                  }}
                >
                  Delete
                </button> */}
              </div>
            );
          })}
        </div>
        <div>
          {this.state.showDetailPost ? (
            <PostDetail
              selectedPostData={this.state.selectedPostData}
              fetchPosts={(id) => {
                this.deletePost(id);
                this.setState({
                  showDetailPost: false,
                });
              }}
            />
          ) : null}
        </div>
      </div>
    );
  }
}
ReactDOM.render(<PostsList />, document.getElementById("container"));
