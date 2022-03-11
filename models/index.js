const User = require('./User');
const Plant = require('./Plant');
const Category = require('./Category');
//const Comment = require('./Comment');

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

// Comment.belongsTo(User, {
//   foreignKey: 'user_id'
// });

// Comment.belongsTo(Plant, {
//   foreignKey: 'plant_id'
// });

// User.hasMany(Comment, {
//   foreignKey: 'user_id'
// });

// Plant.hasMany(Comment, {
//   foreignKey: 'plant_id'
// });

module.exports = { User, Plant, Category, 
//  Comment 
};