
// API key for yelp
const YELP_API_KEY =
  "ICI4S6yJYRB24kN6bGoJ3UB8lxsWl_tPSRW_764ahFqek9pn2VhU8-W3PdAaczWjN4iCkVBuGNaPZQQaXcEh87R2k89einz0772uWa4njHkKqphljq6VWC1-mYsnYnYx";

$(searchCity).on("click", function () {
  let cityName = document.getElementById("city-name").value;


  const url = `https://api.yelp.com/v3/businesses/search?location=${cityName}"&categories=gardening`;

  const apiOptions = {
    headers: {
      Authorization: `Bearer ${YELP_API_KEY}`,
    },
  };
  
  

});

//https://cors-anywhere.herokuapp.com/
