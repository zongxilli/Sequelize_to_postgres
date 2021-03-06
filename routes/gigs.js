const express = require('express');
const router = express.Router();
const db = require('../db/db');
const Gig = require('../models/Gig');

router.get('/', (req, res) =>
	Gig.findAll()
		.then((gigs) => {
			console.log(gigs);

			res.sendStatus(200);
		})
		.catch((err) => console.error(err.message))
);

module.exports = router;
