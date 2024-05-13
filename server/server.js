const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Add CORS middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Replace with your frontend URL
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Create MySQL Connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Priya02012005',
  database: 'easystay'
});

// Connect to MySQL
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Database');
});

// Handle POST request to '/book' endpoint
app.post('/book', (req, res) => {
  const { name, age, totalPersons, checkIn, checkOut } = req.body;

  // Insert the form data into the 'bookings' table
  const sql = `INSERT INTO bookings (name, age, totalPersons, checkIn, checkOut) VALUES (?, ?, ?, ?, ?)`;
  const values = [name, age, totalPersons, checkIn, checkOut];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error saving booking to database:', err);
      res.status(500).send('Error saving booking');
    } else {
      console.log('Booking saved to database');
      res.status(200).send('Booking saved successfully');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
