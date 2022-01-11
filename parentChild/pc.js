// passing  Data from parent to child
function ParentComponent(){
    const age = 80
    return <div>
    <h1> ParentComponent</h1>
    <ChildComponent parentAge={age}/>

    </div> 
}
function ChildComponent(props){
return    <h3>
ChildComponent {props.parentAge}
    </h3>
}

ReactDOM.render(<ParentComponent/>,document.getElementById("container"))



//

// class MyComponent extends React.Component{
//     state = {
//         firstName:"amanpreeth",
//         lastName:"k"
//     }
//     updateName = (fname) =>{
//         console.log("before",this.state.firstName)
//         console.log("before",this.state.lastName)

   
// this.setState({firstName:"sachin"},()=>{console.log("after",this.state.firstName);
// console.log("after",this.state.lastName)})

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


// class Mycomponent1 extends MyComponent{
//     render()
// }




//p to c

// class Parent extends React.Component {
//     state = { data : "Hello World" } 
//     render() {
            
//             return (
//                 <div>
//                      <Child1/>            //no data to send             
//                      <Child2 dataFromParent = {this.state.data} />
//                 </div>
//             );
//         }
//     }
//     //It is no compulsion to use the data to send as a state, simple vars or const variables could also be used to send data from Parent to Child.


//     class Child2 extends React.Component {
//         render() {
                
//                 return (
//                     <div>
//                         The data from parent is:{this.props.dataFromParent}
//                     </div>
//                 );
//             }
//         }