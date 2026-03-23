import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://static01.nyt.com/images/2025/07/25/multimedia/kla-diner-style-burger-fkmj/kla-diner-style-burger-fkmj-mediumSquareAt3X.jpg"
          alt="logo"
        ></img>
      </div>

      <div className="nav-items">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact us</li>
        <li>Cart</li>
      </div>
    </div>
  );
};

const AppLaout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const RestaurantCart = (props) => {
  const {restaurantData}=props

  return (
    <div className="res-card" style={styleCard}>
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

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://namastedev.com/api/v1/listRestaurants")
        .then((res) => res.json())
        .then((data) => {
          console.log({message:"data is", data})
            const resList =
                data?.data.data?.cards[1].card.card.gridElements.infoWithStyle
.restaurants

            setRestaurants(resList);
            setLoading(false);
        });
}, []);


console.log(restaurants)
  return (
    <div className="body">
      <div className="search">Search</div>

      <div className="res-container">        
      {restaurants?.map((ele, index) => (
  <RestaurantCart key={index} restaurantData={ele} />
))}
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLaout />);

