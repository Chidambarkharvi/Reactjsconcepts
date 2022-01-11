class LifeCycleComponent extends React.Component{

constructor(props){
    super(props);
    console.log('inside constructor method');
    // 1. initialize the state or data members
    // 2.to bind methods 

    this.state={
        userName:"ajay"
    }
  
}
static getDerivedStateFromProps(){
    console.log("inside getDerivedStateFromProps");
    //can return new state or return null
    return{
        userName:"sachin"
    }
}

render(){
    //write the UI / jsx code
    console.log("inside render method")
    return <div>

hello {this.state.userName}


    </div>
}


ComponentDidMount(){
    console.log(" inside ComponentDidMount");
    //this method will be called once the component is rendered into the real dom 
    // 1. API calls (side effects)
    // 2.business logics
    // 3.subscribe to third party apis
}

}
ReactDOM.render(<LifeCycleComponent/>,document.getElementById("container"))