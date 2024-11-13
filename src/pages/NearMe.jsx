import React from "react";
import RestaurantList from "../components/RestaurantList";
import Header from "../components/Header";
import 'bootstrap/dist/css/bootstrap.min.css'; 
const NearMe = () => {
  return (
    <div>
      <Header pageTitle={"Near Me"} />
      <div className="container-fluid">
        
        <div style={{ marginTop: "19vw" }}>
          <RestaurantList />
        </div>
      </div>
    </div>
  );
};

export default NearMe;
