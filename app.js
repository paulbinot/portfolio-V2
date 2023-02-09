require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');

const PORT = process.env.PORT ?? 3000;

// Routers import
const mainRouter = require('./src/routers/mainRouter');


// Create server
const app = express();
app.set("view engine", "ejs");
app.set("views", "./src/views");

// -----MIDDLEWARES-----
app.use(express.static("public"));
app.use(express.json());

// ----MAILER----
app.post('/', (req, res) => {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: process.env.MAIL_SERVICE,
    secure: false,
    auth: {
      user: process.env.MAIL,
      pass: process.env.MAIL_PASSWORD,
    }
  });

  const mailOptions = {
    from: req.body.email,
    to: process.env.MAIL,
    subject: `Message de la part de ${req.body.name} (${req.body.email}) : ${req.body.subject}`,
    text: req.body.message
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.log(error);
      return res.send(error);
    }
    res.send("success");
  });
});

// Routers
app.use(mainRouter);

// 404
app.use((req, res) => {
  res.statusCode = 404;
  res.redirect('/');
});

app.listen(PORT);
