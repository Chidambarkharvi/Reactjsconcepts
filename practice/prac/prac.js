// class Sachin extends React.Component {
//   constructor() {
//     super();
//   }

//   render() {
//     return (
//       <h1>
//         {" "}
//         hello <img src={this.props.src} /> {this.props.names} {this.props.id}{" "}
//       </h1>
//     );
//   }
// }

// const Many = (
//   <div>
//     {" "}
//     <Sachin
//       id="32"
//       name="sachu"
//       src="https://th.bing.com/th/id/OIP.orHTGDKDou_DcpvxN3XMZAHaFj?w=256&h=193&c=7&r=0&o=5&dpr=1.5&pid=1.7"
//     />{" "}
//     <Sachin
//       id="33"
//       name="sachin"
//       src="https://th.bing.com/th/id/OIP.d-ZzZ7JwBoTqyjWGMAG9mAHaFj?w=245&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7"
//     />{" "}
//     <Sachin
//       id="34"
//       name="sachin kharvi"
//       src="https://th.bing.com/th/id/OIP.avxhtQqr5FoubGjq4sIXugHaEo?w=310&h=193&c=7&r=0&o=5&dpr=1.5&pid=1.7"
//     />{" "}
//   </div>
// );

// ReactDOM.render(Many, document.getElementById("container"));

// class Sachin extends React.Component {
//   state = {
//     fname: "sachina",
//     lname: "kharvi",
//   };

//   changeName = ()=> {
//  console.log("clicked")
//     this.setState({ fname: "manu" ,lname:"sachin"});
//   }

//   render() {
//     return (
//       <div>
//         <h1>
//           {" "}
//           hii hello {this.state.fname} {this.state.lname}{" "}
//         </h1>
//         <h2> age </h2>
//         <button onClick={this.changeName}> change </button>

//       </div>
//     );
//   }
// }

// ReactDOM.render(<Sachin />, document.getElementById("container"));
