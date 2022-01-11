class MyComponent extends React.Component {
  state = {
    userName: "sachin",
  };
  constructor(props) {
    super(props);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);
  }
  handelClick0() {
    console.log("this will be undefined handleClick ");
    //this will be undefined
    console.log(this);
    // console.log(this.state.username)
  }

  //to overcome this problem of this undefined we should use arrow functions

  handleClick = () => {
    console.log("handleClick arrow function");
    console.log(this);
    // console.log(this.state.userName)
  };
  handleClick1 = () => {
    console.log("Bind in onClick handleClick1 ");
    console.log(this);
  };
  handleClick2 = () => {
    console.log("Bind in onClick handleClick2 ");
    console.log(this);
  };
  handleClick3 = () => {
    console.log("Bind in onClick handleClick3 ");
    console.log(this);
  };
  handleClick4 = () => {
    console.log("Bind in onClick handleClick4 ");
    console.log(this);
  };
  render() {
    return (
      <div>
        <p> MyComponent</p>
        <button onClick={this.handelClick0}>click0</button>

<button onClick={this.handleClick}>
   click
</button>   

<button onClick={this.handleClick1.bind(this)}>
click1
</button>

<button onClick={this.handleClick2.bind(this)}>
click
</button>
   </div>
    );
  }
}

ReactDOM.render(<MyComponent />, document.getElementById("container"));
