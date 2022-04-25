import React from "react";

const Profile = () => {
  return (
    <div style={{maxWidth:"550px",margin:"0px auto"}}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "18px 0px",
          borderBottom:"1px solid grey"
        }}
      >
        <div>
          <img
            style={{ width: "160px", height: "160px", borderRadius: "80px" }}
            src="https://images.unsplash.com/photo-1532170579297-281918c8ae72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHJ1c3NpYW4lMjB3b21hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          />
        </div>
        <div>
          <h4>Tasya</h4>
          <div style={{display:"flex", justifyContent:"space-between",width:"108%"}}>
              <h5>10 posts</h5>
              <h5>10 followers</h5>
              <h5>10 following</h5>
          </div>
        </div>
      </div>

      <div className="gallery">
          <img className="item" src="https://images.unsplash.com/photo-1647136457309-17a62b4047da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1MHxTNE1LTEFzQkI3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/>
          <img className="item" src="https://images.unsplash.com/photo-1647136457309-17a62b4047da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1MHxTNE1LTEFzQkI3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/>
          <img className="item" src="https://images.unsplash.com/photo-1647136457309-17a62b4047da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1MHxTNE1LTEFzQkI3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/>
          <img className="item" src="https://images.unsplash.com/photo-1647136457309-17a62b4047da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1MHxTNE1LTEFzQkI3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/>
          <img className="item" src="https://images.unsplash.com/photo-1647136457309-17a62b4047da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1MHxTNE1LTEFzQkI3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/>
          <img className="item" src="https://images.unsplash.com/photo-1647136457309-17a62b4047da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1MHxTNE1LTEFzQkI3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/>
      </div>

    </div>
  );
};

export default Profile;
