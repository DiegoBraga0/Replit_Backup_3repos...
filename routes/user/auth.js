/*
var express = require('express');
var router = express.Router();

var passport = require('passport');
var LocalStrategy = require('passport-local');
*/
//var crypto = require('crypto');
/*
var db = require('../db');
var MongoClient = require('mongodb').MongoClient;
uri = 'mongodb+srv://student:passwd@cluster0.rmnftxl.mongodb.net/'
var client = new MongoClient(uri);
var collection = client.db('db').collection('users');
var bcrypt = require('bcrypt');
*/

var express = require("express");
var router = express.Router();
const MongoClient = require("mongodb").MongoClient;
var usersDAO = require("../../src/models/dao/usersDAO.js");

const uri = process.env['uri']

const client = new MongoClient(uri);

router.post("/", async function (req, res, next) {
		const form = req.body;
		const users_form = {
			email: form.username,
			senha: form.senha,
		};
	try {
		await client.connect();
		const user = await usersDAO.getUserByEmail(client, users_form.email);

		if (!user) {
			res.send("Usuário não econtrado");;
			return;
		}

		if (user.senha !== users_form.senha) {
			res.send("Senha incorreta");
			return;
		}
		res.render("home");

	} catch (err) {
		res.send(err);
	} finally {
		await client.close();
	}
});


module.exports = router;