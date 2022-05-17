import React,{useContext,useRef,useEffect,useState} from "react";
import { Link , useNavigate} from "react-router-dom";
import { UserContext } from "../App";
import M from "materialize-css";

const NavBar = () => {
  const searchModal = useRef(null)
  const [search,setSearch] = useState('')
  const [userDetails,setUserDetails] = useState([])
  const {state,dispatch} = useContext(UserContext)
  const navigate = useNavigate()
  useEffect(()=>{
    M.Modal.init(searchModal.current)
  },[])
  const renderList = ()=>{
    if(state)
    {
      return [
        <li key="1">
          <i data-target="modal1" className="large material-icons modal-trigger" 
          style={{color:"black",marginRight:"10px",cursor:"pointer"}}
          >
          search
          </i>
        </li>,
        <li key="2">
          <Link to="/myfollowingpost" style={{color:"black"}}>
          <i className="material-icons" style={{ color: "black" }}> explore </i>
          </Link>
        </li>,
        <li key="3">
          <Link to="/create" style={{color:"black"}}>
          <i className="material-icons" style={{ color: "black" }}> add_box </i>
          </Link>
        </li>,
        <li key="4">
          <Link to="/profile" style={{color:"black"}}>
          <i className="material-icons" style={{ color: "black" }}> perm_identity </i>
          </Link>
        </li>,
        <li key="5">
          <button className="btn waves-effect waves-light #64b5f6 blue darken-2" style={{marginRight:"2px"}}
          onClick={()=>{
            localStorage.clear()
            dispatch({type:"CLEAR"})
            navigate("/signin")
          }}>
          LOGOUT
          </button>
        </li>
      ]
    }
    else
    {
      return [
        <li key="6"><Link to="/signin" style={{color:"black"}}>Signin</Link></li>,
        <li key="7"><Link to="/signup" style={{color:"black"}}>Signup</Link></li>
      ]
    }
  }

  const fetchUsers = (query)=>{
    setSearch(query)
    fetch("/search-users",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        query
      })
    })
    .then(res=>res.json())
    .then(results=>{
     // console.log(results)
      setUserDetails(results.user)
    })
  }

  return (
  <nav>
    <div className="nav-wrapper white">
      <Link to={state? "/" : "/signin"} className="brand-logo left" style={{color:"black", marginLeft:"2px"}}>Instagram</Link>
      <ul id="nav-mobile" className="right">
        {renderList()}
      </ul>
    </div>

    <div id="modal1" className="modal" ref={searchModal} style={{color:"black"}}>
      <div className="modal-content" style={{color:"black"}}>
        <input
         type="text"
         placeholder="search users"
         value={search}
         onChange={(e)=>fetchUsers(e.target.value)}
        />
        <ul className="collection">
         { 
            userDetails.map((item) =>{
            return (
              <Link to={item._id !== state._id ? "/profile/"+item._id:"/profile"}
                onClick={()=>{
                  M.Modal.getInstance(searchModal.current).close()
                  setSearch('')
                }}
              > 
                <li className="collection-item" style={{color:"black"}}>{item.email}</li>
              </Link>
              );
            })
         }
        </ul>
      </div>
      <div className="modal-footer">
        <button className="modal-close waves-effect waves-blue btn-flat" onClick={()=>setSearch('')}>close</button>
      </div>
    </div>
  </nav>
  );
};

export default NavBar;