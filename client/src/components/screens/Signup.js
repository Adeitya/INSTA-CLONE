import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  return( 
    <div className="mycard">
      <div className="card auth-card input-field">
        <h2>Instagram</h2>
        <input type="text" placeholder="name"/>
        <input type="text" placeholder="email"/>
        <input type="text" placeholder="password"/>
        <button className="btn waves-effect waves-light #64b5f6 blue lighten-2">Sign up</button>
        <h5>
            Have an account?
            <Link to="/signin" style={{color:"#64b5f6 blue lighten-2"}}> Log in</Link>
        </h5>
      </div>
    </div>
  );
};

export default Signin;
