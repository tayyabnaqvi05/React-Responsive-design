import React from 'react';
import '../App.css';
const Login = () => {
    return (
<>
<div className="signup">
  <div className="box1">
<form>
  <h4>Sign In</h4>
  <div className="form-group">
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address"/>
  </div>

  <div className="form-group">  
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label checkbtn-txt" for="exampleCheck1">Remember Me</label>
  </div>
  <input type="submit" className="btn btn-danger btn-lg btn-block btn-txt" value="Login"/>
</form>
</div>
</div>
</>
  );
};  
export default Login;