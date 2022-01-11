class ParentComponent extends React.Component {
  state = { userName: "giri" };

  updateUserName = (value) => {
    console.log(value);
    this.setState({ userName: value });
  };

  render() {
    return (
      <div>
        ParentComponent - {this.state.userName}
        <button
          onClick={() => {
            this.updateUserName("parent name");
          }}
        >
          {" "}
          update UserName
        </button>
        <ChildComponent
          userName={this.state.userName}
          updateName={this.updateUserName}
        />
      </div>
    );
  }
}

class ChildComponent extends React.Component {
  state = {
    uname: "child name",
  };
  render() {
    console.log(this.props);
    return (
      <div>
        ChildComponent - {this.props.userName}
        <button
          onClick={() => {
            this.props.updateName(this.state.uname);
          }}
        >
          
          update username from child
        </button>
      </div>
    );
  }
}

ReactDOM.render(<ParentComponent />, document.getElementById("container"));
