import React from "react"
import ReactDOM from "react-dom/client"





const RestaurantCart = (props) => {
    const {restaurantData}=props
    console.log("inside restaurant ", props.restaurantData.info.id)
  
    return (
      <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
        <div>
          <img
            className="res-logo"
            alt="res-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuXt8gQyAm-lRjaTRdg0JOcJtI0uU7c2czvw&s"
          />
          <h3>{restaurantData.info.name}</h3>
          <span>{restaurantData.info.cuisines.join(', ')}</span>
          <br/>
          <span>{restaurantData.info.totalRatingsString } </span>
          <br/>
          <span>{restaurantData.info.sla.slaString}</span>
        </div>
      </div>
    );
  };

  export default RestaurantCart