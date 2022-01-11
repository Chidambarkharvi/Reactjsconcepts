// const element = <h1> welcome </h1>
// ReactDOM.render(element,document.getElementById("container"))


//JSX attributes 
//key is string 
//value can be string and anything other than string
//should be wrapped inside curly braces i.e,. {}

let firstname = "sachin"

const element = <h1 id="test" person={{firstname:"vijay"}} numbers={[10,20]} age={60} > welcome {firstname} , age is {18+5}</h1>
console.log(element)
 ReactDOM.render(element,document.getElementById("container"))
