
/*
var express = require('express');
var router = express.Router();

// GET home page.
router.get('/', function(req, res, next) {
	res.render('user/signin');
});

module.exports = router;
*/

var express = require('express');
var router = express.Router();
var contactsDAO = require('../../src/models/dao/contactDAO');

const { MongoClient } = require('mongodb');

const uri = process.env['uri']

const client = new MongoClient(uri);

/* GET home page. */

router.get('/:email', async function(req, res, next) {
	const email = req.params.email;
	const contacts = await contactsDAO.findContactByEmail(client, email);
	const contact = contacts[0];
	console.log(contact)
	res.render('user/login', { title: 'form', action: '/login/update', contact : contact });    
});

router.get('/', async function(req, res, next) {
	res.render('user/signin', { action: '/login/create' });    
});

module.exports = router;