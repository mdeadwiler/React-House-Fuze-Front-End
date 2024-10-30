import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const HomeOwnerProfile = () => {
  const { userData } = useParams();
  const [homeOwner, setHomeOwner] = useState(null);

  useEffect(() => {
    const { userData } = {
      id: "",
      username: "",
      email: "",
      phoneNumber: "",
      isHomeOwner: "",
    };
    setHomeOwner(userData);
  }, [userData]);

  return (
    <div className="homeOwner">
      <div className="homeOwner-picture">
        <img src="" alt="homeOwner" />
      </div>
      <div>
        <button className="edit-button">Edit</button>
      </div>

      <div className="homeOwner-details">
        <div className="home-details">
          <label>Username</label>
          <div>{homeOwner.username}</div>
        </div>
        <div className="detail-item">
          <label>Email</label>
          <div>{homeOwner.email}</div>
        </div>
        <div className="detail-item">
          <label>Phone</label>
          <div>{homeOwner.phoneNumber}</div>
        </div>
        <div className="profile-actions">
          <button className="update-button">Update Profile</button>
          <button className="delete-button">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default HomeOwnerProfile;
