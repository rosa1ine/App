// backend/index.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3307;

// Create a MySQL connection pool
const pool = mysql.createPool({
    host: '127.0.0.1',  // localhost
    user: 'root',
    password: 'Skamila1',
    database: 'InDriverApp',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    connectTimeout: 60000  // 60 seconds
});

// Express middleware to handle JSON data
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Example route to query the database for all users
app.get('/users', (req, res) => {
    pool.query('SELECT * FROM Users', (error, results) => {
        if (error) {
            console.error('Error querying database:', error);
            console.error('SQL:', error.sql); // Log the SQL query
            res.status(500).json({ error: 'Internal Server Error', message: error.message });
        } else {
            res.json(results);
        }
    });
});

app.get('/test', (req, res) => {
    pool.query('SELECT 1', (error, results) => {
        if (error) {
            console.error('Error querying database:', error);
            res.status(500).json({ error: 'Internal Server Error', message: error.message });
        } else {
            res.json(results);
        }
    });
});


// Example route to insert a new user into the database
app.post('/users', (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    pool.query(
        'INSERT INTO Users (FirstName, LastName, Email, Password) VALUES (?, ?, ?, ?)',
        [firstName, lastName, email, password],
        (error, results) => {
            if (error) {
                console.error('Error inserting into database:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            } else {
                res.json({ message: 'User added successfully', userId: results.insertId });
            }
        }
    );
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error', message: err.message });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
