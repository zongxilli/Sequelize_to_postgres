const express = require('express');
const expressHandlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

// Database
const db = require('./db/db');

// Test DB
db.authenticate()
	.then(() => console.log('Database connected...'))
	.catch((err) => console.error(err.message));

const app = express();

app.get('/', (req, res) => res.send('INDEX'));

// Gig routes
app.use('/gigs', require('./routes/gigs'))

app.listen(
	process.env.PORT || 5000,
	console.log(`Server is running on port ${process.env.PORT || 5000}`)
);
