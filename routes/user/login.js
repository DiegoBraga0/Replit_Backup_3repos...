var express = require('express');
var router = express.Router();
var contactsDAO = require('../../src/models/dao/contactDAO');

const { MongoClient } = require('mongodb');

const uri = process.env['uri']

const client = new MongoClient(uri);

/* GET home page. */

router.get('/:email', async function(req, res, next) {
	const user = req.params.user;
	const contacts = await contactsDAO.findContactByUser(client, user);
	const contact = contacts[0];
	console.log(contact)
	res.render('user/login', { title: 'form', action: '/login/update', contact : contact });    
});

router.get('/', async function(req, res, next) {
	res.render('user/login', { action: '/login/auth' });    
});

module.exports = router;
