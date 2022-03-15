const router = require('express').Router();
const axios = require('axios');
// const { response } = require('express');
// const request = require('request');
// const yelp = require('yelp-fusion');

//https://api.yelp.com/v3//business/search

router.get('/business/:id', async (req, res) => {
    console.log('this is the id', req.params.id)
 const url = `https://api.yelp.com/v3/businesses/search?location=${req.params.id}&categories=gardening`
    axios.get(url, {
        headers: {
            Authorization: `Bearer ${process.env.YELP_API_KEY}`
          }
          
    }).then(response => {
        res.json(response.data.businesses)
    })
});

module.exports = router;

   
/* GET users listing. */
// router.post("/business/search", async, (req, res) => {

//  const yelpApiUrl = "https://api.yelp.com/v3/";
//  const client = (yelpApiUrl, {
//      headers: { Authorization: `Bearer ${process.env.YELP_API_KEY}` },
//    });

//  const query = `?location=miami&categories=gardening`;

  
//  const data = await client.request(query, req.body);
//   res.json(data);
//   console.log(data);
// });

// https://morioh.com/p/683893ebd713






// buttonEl.addEventListener("click", function () {
//     const cityEl = document.getElementById('city').value;

//     const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${cityEl}"&categories=gardening`;
//     //const url = `https://api.yelp.com/v3/businesses/search?location=${cityEl}"&categories=gardening`;
    
//     const apiOptions = {
//       headers: {
//         Authorization: `Bearer ${YELP_API_KEY}`,
//       },
//     };
//       fetch(url, apiOptions)
//           .then(function (response) {
//               return response.json();
//       })
//       .then(function (data) {
//         console.log(data.businesses);
//         let shopList = data.businesses.slice(0, 20);
  
  
//         for (var i = 0; i < shopList.length; i++) {
              
//           let businessName = shopList[i].name;
//           let businessURL = shopList[i].url;
//           const rating = shopList[i].rating;
  
//           let li = document.createElement("li");
//           let ratingImg = document.createElement("img");
//           ratingImg.src = `/img/yelp-stars/${rating}.png`;
//           ratingImg.setAttribute("style", "width: 25%; float: right; ")
  
//           let aText = document.createElement("a");
//           aText.innerText = businessName;
//           li.setAttribute("style", "list-style: none; padding: 5px; background-color: #FFFDD0; border-radius: 5px; color: #5b695b; font-size:20px; width:100%; cursor:pointer; margin-top:20px; margin-bottom:20px;");
//           aText.href = businessURL;
  
//           let listEl = document.querySelector("#list");
//           listEl.appendChild(li);
//           li.appendChild(aText);
//           li.appendChild(ratingImg);
      
//         }
//       })
//   });