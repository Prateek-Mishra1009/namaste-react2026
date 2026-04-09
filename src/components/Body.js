import { useEffect, useState } from "react";
import React from "react";
import RestaurantCart from "./Restaurant";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListofRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filteredList, setFilteredList] = useState([]);
  const [searchText,setSearchText]=useState("")

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    const filtered = filteredList.filter(
      (res) => Number(res?.info?.avgRating) < 4.3
    );
    setFilteredList(filtered);
  };

  // const search = (event) => {
  //   const value = event.target.value.toLowerCase(); // use fresh value
  //   setSearchText(value);
  
  //   const searchedCard = listOfRestaurants.filter((res) => 
  //     res.info.name.toLowerCase().includes(value)
  //   );
  
  //   console.log(searchedCard);
  //   setFilteredList(searchedCard)
   
  // };

  const search = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchText(value);

    const filteredCard = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(value)
    );
    setFilteredList(filteredCard);
  };

  const fetchData = async () => {
    try {
      const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
      const json = await data?.json();
      setLoading(false);
      setListofRestaurants(
        json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          .restaurants
      );

      setFilteredList(
        json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          .restaurants
      );
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="body">
      <div className="search">
        <input type="text" value={searchText} onChange={search} />
        <button >Search</button>
      </div>

      <button className="button" onClick={handleClick}>
        Filter
      </button>
      <div className="res-container">
        {/* {console.log("before render", listOfRestaurants)}     */}

        {filteredList?.map((ele, index) => (
         <Link key={ele.info.id} to={`/restaurants/${ele.info.id}`}>
           <RestaurantCart   restaurantData={ele} />
         </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
