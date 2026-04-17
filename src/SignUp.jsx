import React from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  const handleSignUp = () => {
    // Perform Signup logic here
    navigate("/");
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }} className="Loginform">
      <h1>Loamy</h1>
      <p style={{opacity:"0.6",fontSize:"13px"}}>Create your account and take control of your finances . </p>
      <form>


         <div className="" style={{margin:"30px 0px"}}>

        <label>Buisness Name</label>
        <br />
        <input type="text" placeholder="Mama Tolu's Kitchen" />
        </div>


        <div className="" style={{margin:"30px 0px"}}>

        <label>Email</label>
        <br />
        <input type="text" placeholder="your@business.com" />
        </div>

        <div>
            <label>Password</label>
            <br />
        <input type="password" placeholder="܁܁܁܁܁܁܁܁܁܁܁܁" />

        </div>

      </form>

      <div style={{margin:"30px 0px", alignItems:'center',}}>
      <button style={{ padding:"10px 120px", borderRadius:"10px"}} onClick={handleSignUp}>Continue</button>
      </div>


        {/* <button >Sign Up</button> */}
    </div>
  );
}

export default SignUp;