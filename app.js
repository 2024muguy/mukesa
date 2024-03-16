
// app.js
// Initial required modules
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();
// const axiosRoutes = require("./Routes/axiosRoutes.js"); // Importing the Axios routes module
const session = require('express-session');
const flash = require('flash');
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const router = require("./Routes/routes.js");

require("dotenv").config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
})
  .then(() => console.log('Database Connected'))
  .catch(err => console.log(err));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Set the views directory to a separate directory
app.set('views', path.join(__dirname, 'views'));

// Set the view engine to use EJS
app.set('view engine', 'ejs');
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
app.use(flash());

// Use the routes
app.use("/api", router);

// // Use the Axios routes
// app.use("/api", axiosRoutes);
app.get('/index', (req, res) => {
  // Fetch user data from the database or wherever it's stored
  const user = {
      profilePic: 'path_to_profile_pic.jpg',
      name: ''
  };

  // Render the index.ejs template and pass the user object as a local variable
  res.render('index', { user: user });
});

// Define additional routes
app.get('/', (req, res) => {
  res.render('index'); // Render the index.ejs file
});

app.get('/signin', (req, res) => {
  res.render('signin'); // Render the signin.ejs file
});

app.get('/about', (req, res) => {
  res.render('about'); // Render the signin.ejs file
});

app.get('/vision', (req, res) => {
  res.render('vision'); // Render the signin.ejs file
});

app.get('/admin', (req, res) => {
  res.render('admin'); // Render the signin.ejs file
});

app.get('/constitution', (req, res) => {
  res.render('constitution'); // Render the signin.ejs file
});

app.get('/logout', (req, res) => {
  res.render('logout'); // Render the signin.ejs file
});

app.post('/register', (req, res) => {
  res.render('index'); // Render the signin.ejs file
});

// Define additional routes
app.get('/', (req, res) => {
  res.render('index', { isAuthenticated: req.isAuthenticated() }); // Pass isAuthenticated variable
});

app.get('/', (req, res) => {
  res.render('css/styles.css'); // Render the static files
});
// 404 error page
app.use((req, res) => {
  res.status(404).render("404");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
