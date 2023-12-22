import React from "react";
import './UserProfile.css';

import box from './box.png';


const UserProfile = (props) => {
  const { name, bio } = props;

  return (
    <React.Fragment>

      <div className="profile-details">

        <h2>{name}</h2>

        <p>{bio}</p>
        
        <img src={box} alt="Think out side the Box" />
      </div>

    </React.Fragment>
  );
};


export default UserProfile;
