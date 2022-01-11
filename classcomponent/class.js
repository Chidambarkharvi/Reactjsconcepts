// class Header extends React.Component{
//     render(){
//         return  <h2>
//             Header s
//         </h2>
//     }
// }

// class Content extends React.Component{
//     render(){
//         return   <h2>
//             content
//         </h2>
//     }
// }

// class Footer extends React.Component{
//     render(){
//         return    <h2>
//             Footer
//         </h2>
//     }
// }

// const containerElement = <div>
//     <Header/>
//     <Content/>
//     <Footer/>

// </div>

// ReactDOM.render(containerElement,document.getElementById("container"))

class Header extends React.Component {
  constructor(props) {
    super(props);
  
  }
  render() {
    return (
      <h2>
        Header {this.props.firstName} {this.props.children}
      </h2>
    );
  }
}
const container = (
  <div>
    {" "}
    <Header firstName="sachin"> hello </Header>{" "}
  </div>
);
ReactDOM.render(container, document.getElementById("container"));
