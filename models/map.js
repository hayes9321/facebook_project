'use strict';
module.exports = function(sequelize, DataTypes) {
  var map = sequelize.define('map', {
    word_id: DataTypes.INTEGER,
    mapped_word: DataTypes.STRING,
    weight: DataTypes.DECIMAL
  }, {
    classMethods: {
      associate: function(models) {
        
      }
    }
  });
  return map;
};