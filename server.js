// server.js
const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 5000; // Choose a port for your server

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Priya02012005',
  database: 'easystay'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected');
});

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle form submission
app.post('/book', (req, res) => {
  const { name, age, totalPersons, checkIn, checkOut } = req.body;
  const sql = 'INSERT INTO bookings (name, age, totalPersons, checkIn, checkOut) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [name, age, totalPersons, checkIn, checkOut], (err, result) => {
    if (err) {
      res.status(500).send('Error saving booking');
    } else {
      res.status(200).send('Booking saved successfully');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
