import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const handleBackBtn = () => {
    navigate("/home");
  };
  return (
    <div className="container-fluid">
      <div
        className="container-fluid fixed-top bg-black"
        style={{ height: "7%" }}
      >
        <img
          className="ms-2"
          src="src/assets/arrow-left.svg"
          alt="arrow-left-icon"
          onClick={handleBackBtn}
          style={{ marginTop: "20px" }}
        />
      </div>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-6 border">
            <div>Name</div>
            <div>Reviews</div>
          </div>

          <div className="col-6 border">
            <div>Profile Photo</div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5 ">
        <div className="row d-flex justify-content-around">
          <div className="col border mx-3">
            <div>Name</div>
          </div>

          <div className="col border mx-3">
            <div>Profile Photo</div>
          </div>
          
        </div>
      </div>

      <div className="container-fluid mt-5 bg-black text-white">
        <p>General</p>

      </div>
    </div>
  );
};

export default Profile;
