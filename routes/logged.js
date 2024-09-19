var router = require('express').Router();

router.get('/only', function(req, res) {
	res.send('Im authenticated')
})

module.exports = router;

