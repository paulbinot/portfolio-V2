require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT ?? 3000;

// Routers import
const mainRouter = require('./src/routers/mainRouter');


// Create server
const app = express();
app.set("view engine", "ejs");
app.set("views", "./src/views");

// -----MIDDLEWARES-----
app.use(express.static("public"));



// Routers
app.use(mainRouter);



// 404
app.use((req, res) => {
  res.statusCode = 404;
  res.send("404page");
});

app.listen(PORT);
