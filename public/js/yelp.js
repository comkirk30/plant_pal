// var express = require('express')
// var cors = require('cors')
// var app = express()
 
// app.use(cors())

// app.use(
//   cors({
//     origin: "*",
//     methods: [fetch]
//   })
// )

const buttonEl = document.getElementById('button');


// API key for yelp
const YELP_API_KEY =
  "ICI4S6yJYRB24kN6bGoJ3UB8lxsWl_tPSRW_764ahFqek9pn2VhU8-W3PdAaczWjN4iCkVBuGNaPZQQaXcEh87R2k89einz0772uWa4njHkKqphljq6VWC1-mYsnYnYx";

buttonEl.addEventListener("click", function () {
    const cityEl = document.getElementById('city').value;

    const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${cityEl}"&categories=gardening`;
    //const url = `https://api.yelp.com/v3/businesses/search?location=${cityEl}"&categories=gardening`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
        
      },
    };
      fetch(url, apiOptions)
          .then(function (response) {
              return response.json();
      })
      .then(function (data) {
        console.log(data.businesses);
        let shopList = data.businesses.slice(0, 20);
  
  
        for (var i = 0; i < shopList.length; i++) {
              
          let businessName = shopList[i].name;
          let businessURL = shopList[i].url;
          const rating = shopList[i].rating;
  
          let li = document.createElement("li");
          let ratingImg = document.createElement("img");
          ratingImg.src = `/img/yelp-stars/${rating}.png`;
          ratingImg.setAttribute("style", "width: 25%; float: right; ")
  
          let aText = document.createElement("a");
          aText.innerText = businessName;
          li.setAttribute("style", "list-style: none; padding: 5px; background-color: #FFFDD0; border-radius: 5px; color: #5b695b; font-size:20px; width:100%; cursor:pointer; margin-top:20px; margin-bottom:20px;");
          aText.href = businessURL;
  
          let listEl = document.querySelector("#list");
          listEl.appendChild(li);
          li.appendChild(aText);
          li.appendChild(ratingImg);
      
        }
      })
  });

//https://cors-anywhere.herokuapp.com/



// const express = require('express');
// const request = require('request');

// const app = express();

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });

// app.get('/homepage', (req, res) => {
//   request(
//     { url: `https://api.yelp.com/v3/businesses/search?location=${cityEl}"&categories=gardening`; },
//     (error, response, body) => {
//       if (error || response.statusCode !== 200) {
//         return res.status(500).json({ type: 'error', message: err.message });
//       }

//       res.json(JSON.parse(body));
//     }
//   )
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`listening on ${PORT}`));