import React,{useContext} from "react";
import { Link , useNavigate} from "react-router-dom";
import { UserContext } from "../App";

const NavBar = () => {
  const {state,dispatch} = useContext(UserContext)
  const navigate = useNavigate()
  const renderList = ()=>{
    if(state)
    {
      return [
        <li><Link to="/profile" style={{color:"black"}}>Profile</Link></li>,
        <li><Link to="/create" style={{color:"black"}}>Create post</Link></li>,
        <li>
          <button className="btn waves-effect waves-light #64b5f6 blue darken-2"
          onClick={()=>{
            localStorage.clear()
            dispatch({type:"CLEAR"})
            navigate("/signin")
          }}>
          Logout
          </button>
        </li>
      ]
    }
    else
    {
      return [
        <li><Link to="/signin" style={{color:"black"}}>Signin</Link></li>,
        <li><Link to="/signup" style={{color:"black"}}>Signup</Link></li>
      ]
    }
  }
  return (
    <nav>
    <div className="nav-wrapper white">
      <Link to={state? "/" : "/signin"} className="brand-logo left" style={{color:"black"}}>Instagram</Link>
      <ul id="nav-mobile" className="right">
        {renderList()}
      </ul>
    </div>
  </nav>
  );
};

export default NavBar;