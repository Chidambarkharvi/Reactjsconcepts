function MyComponent(props) {
  const [isAdmin, setisAdmin] = React.useState(true);
  const [adminName, setadminName] = React.useState("giuru");
  const [user, setuser] = React.useState("jalajajaja");


  const updateAdmin = () => {
    if (adminName=== "guru") {
      setadminName("ajay");
    } else {
      setadminName("guru");
    }

    if (isAdmin) {
      setisAdmin(false);
    } else {
      setisAdmin(true);
    }
  };

  const buttonElement = (
    <button
      onClick={() => {
       updateAdmin();
      }}
    >
      update admin
    </button>
  );

  if (isAdmin) {
    return (
      <div>
        <p className={isAdmin ? 'textcolor':""} >admin name - {adminName}</p>
        <button style={adminName.includes('u')?{color:"red",border:"1px solid black",backgroundColor:"gray"}:{
          color:"blue",border:"1px solid red",backgroundColor:"green"
        }}>ADD</button>
        <button>Delete</button>
        {buttonElement}
        {adminName.includes("u")
          ? "u is present in adminName"
          : "u is not present in adminName"}
      </div>
    );
  } else {
    return (
      <div>
        <p className={user.includes('a')? 'textcolor':"bgColor"} > UserName - {user}</p>
        {buttonElement}
      </div>
    );
  }
}

ReactDOM.render(<MyComponent/>, document.getElementById("container"));
