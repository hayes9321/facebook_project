'use strict';
module.exports = function(sequelize, DataTypes) {
  var word = sequelize.define('word', {
    originating: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        models.word.belongsToMany(models.user,{ through:"map"}); 
      }
    }
  });
  return word;
};