var express = require('express');
var router = express.Router();

const { MongoClient } = require('mongodb');

var contactsDAO = require('../../src/models/dao/contactDAO');

const uri = process.env['uri']

const client = new MongoClient(uri);

/* POST home page. */
router.post('/', async function(req, res, next) {
	const form = req.body;
	const email = form.email;
	const doc = 
		{
			name: form.name,
			email: form.email,
			pass: form.pass,
		}
	//console.log(JSON.stringify(doc))
	try {
		await client.connect();
		await contactsDAO.updateContact(client, email, doc);
		const results = await contactsDAO.listContacts(client);
		res.render('login'/*, { title: 'list', results: results }*/);
	} catch (err) {
		res.send(err);
	} finally {
		await client.close()
	}
});

module.exports = router;
