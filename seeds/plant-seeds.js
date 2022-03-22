const { Plant } = require('../models');

const plantData = [{
    name: 'Salazar Syltherin',
    sunlight: 'partial shade',
    water: '5 drops daily',
    date_water: 03/08/2022,
    user_id: 1,
},
{
    name: 'Moira Rose',
    sunlight: 'partial sun',
    water: '10 drops daily',
    date_water: 03/09/2022,
    user_id: 2,
    
},
{
    name: 'Baby Groot',
    sunlight: 'shade',
    water: 'one cup daily',
    date_water: 03/07/2022,
    user_id: 3,
    
},
{
    name: 'Katniss Evergreen',
    sunlight: 'full sun',
    water: '2 drops daily',
    date_water: 03/05/2022,
    user_id: 4,
    
},
{
    name: 'Han Solo',
    sunlight: 'full shade',
    water: '2 cups every other day',
    date_water: 03/02/2022,
    user_id: 5,
    
},
];


const seedPlants = () => Plant.bulkCreate(plantData);

module.exports = seedPlants; 