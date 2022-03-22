const User = require('./User');
const Plant = require('./Plant');
const Category = require('./Category');

// associations
User.hasMany(Plant, {
  foreignKey: 'user_id'
});

Plant.belongsTo(User, {
  foreignKey: 'user_id',
});

Category.hasMany(Plant, {
  foreignKey: 'category_id'
});

Plant.belongsTo(Category, {
  foreignKey: 'category_id',
});



module.exports = { User, Plant, Category };