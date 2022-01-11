function Header(){
    return <h1>Header </h1>
}

function Content(){
    return <p>content </p>
}

function Footer(){
    return <span>footer </span>
}

const Reactelement =  React.createElement("h1",null,"welcome to react") 

// //React.createElement("h1")
// <h1></h1>

// //React.createElement("Header")
// <Header></Header>

const ContainerElement = <div>
    <Header/>
    <Content/>
    <Footer/>


</div>

ReactDOM.render(ContainerElement,document.getElementById("container"))