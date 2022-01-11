class App extends React.Component{
      
    state = {
     name: "",
    }

 handleCallback = (childData) =>{
     this.setState({name: childData})
 }

 render(){
     const {name} = this.state;
     return(
         <div>
             <Child parentCallback = {this.handleCallback}/>
             {name}
         </div>
     )
 }
}

class Child extends React.Component{
    
    onTrigger = (event) => {
        this.props.parentCallback(event.target.myname.value);
        event.preventDefault();
    }
  
    render(){
        return(
        <div>
            <form onSubmit = {this.onTrigger}>
                <input type = "text" 
                name = "myname" placeholder = "Enter Name"/>
                <br></br><br></br>
                <input type = "submit" value = "Submit"/>
                <br></br><br></br>
            </form>
        </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById("container"))