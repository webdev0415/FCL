const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.send('This is from express.js');
});

app.listen(5000, () => {
	console.log('server started on port 5000');
});

app.use((req, res, next) => {
	res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('open', () => {
	console.log('connected to db');
});
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
