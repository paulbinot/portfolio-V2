const { DataTypes, Model } = require("sequelize");
const sequelize = require("../sequelize-client");

class Project extends Model {}

Project.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  github_repo_url: {
    type: DataTypes.STRING
  },
  link: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  tableName: "project"
});

module.exports = Project;
