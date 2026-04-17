import React from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    // Perform login logic here
    navigate("/dashboard");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }} className="Loginform">
      <h1>Loamy</h1>
      <p style={{opacity:"0.6"}}>Welcome back. Login into your account. </p>
      <form>

        <div className="" style={{margin:"30px 0px"}}>

        <label>Email</label>
        <br />
        <input type="text" placeholder="your@business.com" />
        </div>

        <div>
            <label>Password</label>
            <br />
        <input type="password" placeholder="Password" />

        </div>

      </form>

      <div style={{margin:"30px 0px", alignItems:'center',}}>
      <button style={{ padding:"10px 120px", borderRadius:"10px"}} onClick={handleLogin}>Log In</button>
      </div>


      <div >
        <p>Don't have an account? <span onClick={handleSignUp} style={{cursor:"pointer", color:"green"}}>SignUp</span></p>
      </div>
    </div>
  );
}

export default Login;