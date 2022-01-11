// class MyComponent extends React.Component{
//     state = {
//         firstName:"amanpreeth"
//     }
//     updateName = (fname) =>{
//         console.log("before",this.state.firstName)
//         //never update state like below
//         //this.state.firstname = "ravi"

//         this.setState({
//             firstName:"ravi"
//         })
//     }
// render(){
//     return <div>
//         FirstName = {this.state.firstName}
//         <hr/>
//         <button onClick={this.updateName}> update Name </button>
//         <button onClick={()=>{this.updateName("gajendra")}}> update Name </button>
//     </div>
// }
// }
// ReactDOM.render(<MyComponent/>,document.getElementById("container"))

// state are mutable
//seState is asynchronous
//this.setState({firstName:"ravi"})

//second parameter for setState is a callback function.it will be executed once the stATE is updated

class MyComponent extends React.Component {
  state = {
    firstName: "amanpreeth",
    lastName: "k",
  };
  updateName = () => {

    console.log("before", this.state.firstName);
    console.log("before", this.state.lastName);
    this.setState({firstName:"sachin"},()=>{console.log("after",this.state.firstName);
    console.log("after",this.state.lastName)})

 
  };

  updateName1 = (fname) =>{
    this.setState({ firstName: fname });

  }

  render() {
    return (
      <div>
        FirstName = {this.state.firstName} <br />
        Lastname = {this.state.lastName} <hr />
        <button onClick={this.updateName}> update Name </button>
        <button
          onClick={() => {
            this.updateName1("gajendra");
          }}
        >
          
          update Name
        </button>
      </div>
    );
  }
}
ReactDOM.render(<MyComponent />, document.getElementById("container"));
