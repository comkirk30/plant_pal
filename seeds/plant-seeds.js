const { Plant } = require();

const plantData = [{
    name: 'Salazar Syltherin',
    sunlight: 'partial shade',
    water: '5 drops daily',
    date_water: 03/08/2022,
    user_id: 1,
    category_id: 'snake plant',
},
{
    name: 'Moira Rose',
    sunlight: 'partial sun',
    water: '10 drops daily',
    date_water: 03/09/2022,
    user_id: 2,
    category_id: 'flower',
},
{
    name: 'Baby Groot',
    sunlight: 'shade',
    water: 'one cup daily',
    date_water: 03/07/2022,
    user_id: 3,
    category_id: 'cactus',
},
{
    name: 'Katniss Evergreen',
    sunlight: 'full sun',
    water: '2 drops daily',
    date_water: 03/05/2022,
    user_id: 4,
    category_id: 'fern',
},
{
    name: 'Han Solo',
    sunlight: 'full shade',
    water: '2 cups every other day',
    date_water: 03/02/2022,
    user_id: 5,
    category_id: 'succulent',
},
];


const seedPlants = () => Plant.bulkCreate(plantData);

module.exports = seedPlants;
