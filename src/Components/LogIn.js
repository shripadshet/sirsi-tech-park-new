import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function LogIn(props) {
  const navigate = useNavigate();

  // Loop through Array of Objects
  var objPeople = [
    {
      username: "sam",
      password: "codify",
      icon: "youtube.png",
    },
    {
      username: "matt",
      password: "academy",
      icon: "twitter.png",
    },
    {
      username: "chris",
      password: "forever",
      icon: "cat2.jpg",
    },
  ];

  function getInfo() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    for (var i = 0; i < objPeople.length; i++) {
      if (
        username == objPeople[i].username &&
        password == objPeople[i].password
      ) {
        const icon = objPeople[i].icon;
        console.log(username + " is logged in!!!");
        console.log(icon + " is logged ");
        return navigate("/home", { state: { id: icon } });
      }
    }
    alert("incorrect username or password");
    console.log("incorrect username or password");
  }

  return (
    <form className="form">
      <div className="container">
        <label for="uname">
          <b>Username</b>
        </label>{" "}
        <input type="text" id="username" placeholder=" Username" />
        <label for="psw">
          <b>Password</b>
        </label>
        <input type="password" id="password" placeholer="Password" />
        <button type="submit" onClick={getInfo}>
          Login
        </button>
        <label>
          <input type="checkbox" checked="checked" name="remember" /> Remember
          me
        </label>
        <span className="psw">
          Forgot <a href="#">password?</a>
        </span>
      </div>
    </form>
  );
}
export default LogIn;
