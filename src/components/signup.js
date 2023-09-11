import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
const Signup = () => {
    return (
<>
<div className="signup">
  <div className="box1">
<form>
  <h4>Sign Up</h4>
  <div className="form-group">
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>

  <div className="form-group">  
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>

  <div className="form-group">
    <input type="password"  className="form-control" id="exampleInputPassword1" placeholder="Confirm Password"/>

  </div>

  <div class="form-group ">
<div class="g-recaptcha" data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
<input  class="form-control d-none " data-recaptcha="true" required data-error="Please complete the Captcha"/>
<div class="help-block with-errors"></div>
</div>
<Link to="/welcome"><input type="submit" className="btn btn-danger btn-lg btn-block btn-txt" value="SIGN UP"/></Link>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label checkbtn-txt" for="exampleCheck1">I agree to receive communications from the ASH RC.</label>
  </div>
</form>
</div>
<h6 className="already">Already have an account?<span> Sign In Here</span></h6>
<p className="desc">Your security is important to us. We use technology to encrypt, safeguard and secure your personal information. Please view our <span>Privacy Policy</span>. By filling out this form, you agree to our Terms and that you have read our <span>Privacy Policy.</span></p>

</div>
</>
  );
};  
export default Signup;