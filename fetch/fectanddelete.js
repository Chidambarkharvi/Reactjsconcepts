


class PostsList extends React.Component {
  state = {
    posts: []
  };
  fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const postsData = await response.json();
      console.log(postsData);
      this.setState({
        posts: postsData,
      });
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

  render() {
    return (
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
              <p>
                Title - {post.title} id- {post.id}
              </p>

              <button
                onClick={() => {
                  this.deletePost(post.id);
                }}
              >
                {" "}
                Delete{" "}
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
ReactDOM.render(<PostsList />, document.getElementById("container"));
