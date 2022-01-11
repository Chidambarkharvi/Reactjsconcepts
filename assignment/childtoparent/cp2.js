class Parent extends React.Component{

state={userName:"sachin"}
updateName = (value) =>{
    this.setState({userName:value})

}


    render(){
        return (
            <div> {this.state.userName} hello {this.props.name}
            
            <button onClick={()=>{
                this.updateName("manohar")
            }}>
                hello
            </button>
            <Child/>
            </div>
        )
    }
}

class Child extends React.Component{





    render(){
        return (
            <div> hello</div>
        )
    }
}

ReactDOM.render(<Parent name="sachimn"/>, document.getElementById("container"));

