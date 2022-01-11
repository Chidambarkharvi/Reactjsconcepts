function Mycomponents(props) {
  console.log(props);
  return (
    <div>
      <p> welcome {props.firstName}</p>
      <h1> Hello </h1>
      {props.children}
    </div>
  );
}

//to render only one child pass it as {props.children[0]}

ReactDOM.render(
  <Mycomponents id="component" firstName="Nagesh">
    {" "}
    <h1> Text </h1>
  </Mycomponents>,
  document.getElementById("container")
);
