const router = require('express').Router();
const axios = require('axios');

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