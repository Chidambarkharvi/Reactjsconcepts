function UseStateArray(props) {
  const [numbers, setnumbers] = React.useState([10, 20, 30, 40]);
  const addNumber = () => {
    console.log("before push ", numbers);
    //never update the state like this
    //numbers.push(numbers[numbers.length-1]+10)
    //console.log("after push",numbers)
    //setnumbers(numbers)

    //update state like this below
    //1.take a copy of the state
    const numbersCopy = [...numbers];
    //2.Do all the necessary changes in copied variable
    numbersCopy.push(numbersCopy[numbersCopy.length - 1] + 10);
    //3.update the state with copied variable
    setnumbers(numbersCopy);
  };
const deleteNumber = () =>{
    //numbers.pop 
    //setnumbers(numbers)
    const numbersCopy = [...numbers]
    numbersCopy.pop()
    setnumbers(numbersCopy)
}
const updateNumber = () =>{

    //first method
    const numbersCopy = [...numbers]
    const num =15
    
if(num<numbers.length&&num>=0){
    numbersCopy.splice(num,1,100)
    setnumbers(numbersCopy)
} else{
    alert("index is not present")
}

 //method two 



}
return (
  <div>
     <div>
      <button onClick={addNumber}>Add </button>
      <button onClick={deleteNumber}>Delete </button>
 <input name="number"/>
      <button   onClick ={updateNumber}>
        update
      </button>

    </div>
    <p>UseStateArray</p>
    {numbers.map((num, index) => {
      return (
        <p key={index}>
          {num}
          at index {index}
        </p>
      );
    })}
 
  </div>
);
}
ReactDOM.render(<UseStateArray />, document.getElementById("container"));
