var express = require('express');
var router = express.Router();

/* GET home page. */
/*
router.get('/:email', async function(req, res, next) {
	const email = req.params.email;
	const contacts = await contactsDAO.findContactByEmail(client, email);
	const contact = contacts[0];
	console.log(contact)
	res.render('home', { result : contact });    
});
*/

router.get('/', async function(req, res, next) {
	res.render('user/signup');    
});

module.exports = router;