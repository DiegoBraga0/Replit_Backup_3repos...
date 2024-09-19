var express = require('express');
var router = express.Router();
var contactsDAO = require('../../src/models/dao/contactDAO');

const { MongoClient } = require('mongodb');

const uri = process.env['uri'];

const client = new MongoClient(uri);

/* POST home page. */
router.post('/', async function(req, res, next) {
	const form = req.body;
	const form_data = 
		{
			username: form.name,
			email: form.email,
			password: form.pass,
		}
	console.log(form_data)
	try {
		await client.connect();
		const results = await contactsDAO.insertContact(client, form_data);
		res.render('home', { results: results });
	} catch (err) {
		res.send(err);
	} finally {
		await client.close()
	}
});

module.exports = router;
