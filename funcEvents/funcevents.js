//events in js

function EventComponents(props){
    const handleClick = (data) =>{
        console.log("button clicked")
        console.log("data")
   
    }
    return <div> 
        
    <p>
    
       Eventcomponent
    </p>
  {/* handleclick function will be executed without clicking on the button in the below case <button onClick={handleClick()}>
  click first way <button/> */}

  {/* if no parameters to be passed */}
  <button onClick={handleClick}> click first way   </button>
  {/* if there are parameters  */}
  <button onClick={ (data)=>{handleClick( "ajithh")}}>   click second way</button>
        
    </div>
}
ReactDOM.render(<EventComponents/>,document.getElementById("container"))
