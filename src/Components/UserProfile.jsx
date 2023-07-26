import React from "react";
import profilePicture from "../profile.png"
const UserProfile = () => {
    return (
      <section className="UserProfile">
        <img src={profilePicture}/>
        <h2>User Profile</h2>
        <h3>Text</h3>
        <h4>Test Text</h4>
      </section>
    );
  };

  export default UserProfile