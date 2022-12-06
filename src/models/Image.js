const { DataTypes, Model } = require("sequelize");
const sequelize = require("../sequelize-client");

class Image extends Model {}

Image.init({
  url: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  tableName: "image"
});

module.exports = Image;
