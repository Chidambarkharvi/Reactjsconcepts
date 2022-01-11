class PostDetail extends React.Component {
  render() {
    const { id, body, title, userId } = this.props.selectedPostData;
    return (
      <div>
        <p> ID : {id}</p>
        <p> Title : {title}</p>

        <p> Body : {body}</p>

        <p> User : {userId}</p>
      </div>
    );
  }
}

class PostsList extends React.Component {
  state = {
    posts: [],
    
    showDetails: false,
    selectedPostData: null,
  };
  fetchPosts = async () => {
  
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const postsData = await response.json();
      console.log(postsData);
      this.setState({ posts: postsData });
    } catch (err) {
      console.log(err);
      
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
          <button
            onClick={() => {
              this.fetchPosts();
            }}
          >
            Fetch
          </button>
          {this.state.posts.map((post) => {
            return (
              <div key={post.id}>
                <p
                  onClick={() => {
                    this.displaydetailPost(post);
                  }}
                >
                  Title-{post.title}
                </p>

                <p>
                  {/* Title - {post.title}  */}
                  id- {post.id}
                </p>

                <button
                  onClick={() => {
                    this.deletePost(post.id);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
        <div>
          {this.state.showDetailPost ? (
            <PostDetail selectedPostData={this.state.selectedPostData} />
          ) : null}
        </div>
      </div>
    );
  }
}
ReactDOM.render(<PostsList />, document.getElementById("container"));
