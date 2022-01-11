// method 1

// function MyComponent(){

//     const arr = React.useState("ajit")
//     console.log(arr)
//     console.log(arr[0])
//     console.log(arr[1])
//     return (
//         <div>
//              <p> Username - {arr[0]} </p>
//              <button onClick={()=>{
//                  arr[1]("sachin")
//              }}>click
                  
//              </button>
//         </div>
//     )
// }
// ReactDOM.render(<MyComponent/>,document.getElementById("container"))





//method 2


// function MyComponent(){
// const [name,setName] = React.useState("ravi")
// return(
//     <div>
//         <p>
//              Username - {name}
//         </p>
//         <button onClick={()=>{
//                 setName("sachin")
//              }}>click
                   
//              </button>
//     </div>
// )



// }
// ReactDOM.render(<MyComponent/>,document.getElementById("container"))



//can create more than one usetstate


function MyComponent(){
    const [name,setName] = React.useState("ravi")
    const [count,newCount] =React.useState(1)
    return(
        <div>
            <p>
                 Username - {name}
            </p>
            <p>
                count - {count}
            </p>
            <button onClick={()=>{
                    setName("sachin")
                 }}>click
                       
                 </button>
                 <button onClick={()=>{
                newCount(count+Math.floor(Math.random()*10))
                 }}>count
                       
                 </button>
        </div>
    )
    
    
    
    }
    ReactDOM.render(<MyComponent/>,document.getElementById("container"))
    