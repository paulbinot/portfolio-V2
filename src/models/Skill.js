const { DataTypes, Model } = require("sequelize");
const sequelize = require("../sequelize-client");

class Skill extends Model {}

Skill.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  tableName: "skill"
});

module.exports = Skill;
