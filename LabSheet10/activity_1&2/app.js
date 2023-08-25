const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const path = require('path');
const multer = require('multer');

const app = express();

// Set up express-session middleware
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

// Initialize passport and session
app.use(passport.initialize());
app.use(passport.session());

// Set up the view engine (Pug in this case)
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Mock user data (replace with database logic)
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' }
];

// Set up Passport local strategy
passport.use(new LocalStrategy((username, password, done) => {
  const user = users.find(user => user.username === username && user.password === password);
  if (!user) {
    return done(null, false);
  }
  return done(null, user);
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const user = users.find(user => user.id === id);
  done(null, user);
});

// Routes
app.get('/', (req, res) => {
  res.render('index', { user: req.user });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Registration route
app.get('/register', (req, res) => {
    res.render('register');
  });
  
  app.get('/register', (req, res) => {
    res.render('register');
  });
  
  app.post('/register', upload.single('profilePicture'), (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const profilePicture = req.file.filename; // Name of the uploaded file
  
    // Handle user registration here
    // Save user data and profilePicture to database
    res.redirect('/login');
  });
  
  // Logout route
  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
  
  // Start the server...

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });
