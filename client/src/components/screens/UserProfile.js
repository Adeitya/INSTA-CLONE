import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../App";

const Profile = () => {
  const [userProfile, setProfile] = useState(null);
  const [showfollow,setShowFollow] = useState(true);
  const { state, dispatch } = useContext(UserContext);
  const { userid } = useParams();
  //console.log(userid);
  useEffect(() => {
    fetch(`/user/${userid}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setProfile(result);
      });
  }, []);

  const followUser = ()=>{
    fetch("/follow",{
      method:"put",
      headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer "+localStorage.getItem("jwt")
      },
      body:JSON.stringify({
        followId:userid
      })
    })
    .then(res=>res.json())
    .then(data=>{
      // console.log(data)
      dispatch({type:"UPDATE",payload:{following:data.following,followers:data.followers}})
      localStorage.setItem("user",JSON.stringify(data))
      setProfile((prevState)=>{
        return {
          ...prevState,
          user:{
            ...prevState.user,
            followers:[...prevState.user.followers,data._id]
          }
        }
      })
      setShowFollow(false)
    })
  }
  
  const unfollowUser = ()=>{
    fetch("/unfollow",{
      method:"put",
      headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer "+localStorage.getItem("jwt")
      },
      body:JSON.stringify({
        unfollowId:userid
      })
    })
    .then(res=>res.json())
    .then(data=>{
      // console.log(data)
      dispatch({type:"UPDATE",payload:{following:data.following,followers:data.followers}})
      localStorage.setItem("user",JSON.stringify(data))
      setProfile((prevState)=>{
        const newFollower = prevState.user.followers.filter(item=> item!=data._id)
        return {
          ...prevState,
          user:{
            ...prevState.user,
            followers:newFollower
          }
        }
      })
      setShowFollow(true)
    })
  }

  return (
    <>
      {userProfile ? (
        <div style={{ maxWidth: "550px", margin: "0px auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              margin: "18px 0px",
              borderBottom: "1px solid grey",
            }}
          >
            <div>
              <img
                style={{
                  width: "160px",
                  height: "160px",
                  borderRadius: "80px",
                }}
                src="https://images.unsplash.com/photo-1532170579297-281918c8ae72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHJ1c3NpYW4lMjB3b21hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              />
            </div>
            <div>
              <h4>{userProfile.user.name}</h4>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "108%",
                }}
              >
                <h5>{userProfile.posts.length} posts</h5>
                <h5>{userProfile.user.followers.length} followers</h5>
                <h5>{userProfile.user.following.length} following</h5>
              </div>
              {showfollow?
               <button style={{margin:"10px"}}
                className="btn waves-effect waves-light #64b5f6 blue darken-1"
                onClick={()=>followUser()}>
                  Follow
               </button>
               :
               <button style={{margin:"10px"}}
                className="btn waves-effect waves-light #64b5f6 blue darken-1"
                onClick={()=>unfollowUser()}>
                  Unfollow
               </button>
              }
            </div>
          </div>

          <div className="gallery">
            {userProfile.posts.map((item) => {
              return (
                <img
                  key={item._id}
                  className="item"
                  src={item.photo}
                  alt={item.title}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <h2>loading...!</h2>
      )}
    </>
  );
};

export default Profile;