require("dotenv/config");

const { Sequelize } = require('sequelize');

// Ceci est une instance de connexion à la BDD Postgres (c'est notre "client")
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  define: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

// Note : même pas besoin de faire le `connect()`. Par défaut, il se connecte à la base.

module.exports = sequelize;
