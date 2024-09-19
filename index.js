const express = require("express");
const app = express();
const mdbDAO = require("./dao/MongoDBFunctionsDAO")

//const MongoClient = require('mongodb').MongoClient;
const { MongoClient } = require('mongodb');

const uri = process.env['uri']

const client = new MongoClient(uri);

const collection = client.db("db_test02").collection("colect01");

//const collection = client.db("db").collection("contacts");


app.get("/", async (req, res) => {
	res.send(
				"<p>Pagina inicial</p>"
	);
});
app.get("/queryone", async (req, res) => {
	var result = await mdbDAO.queryOne(collection);
	res.send(result);
});

app.get("/querymulti", async (req, res) => {
	var result = await mdbDAO.queryMulti(collection);
	res.send(result);
});

app.get("/insertmulti", async (req, res) => {
	const docs = [
		{ nome: "cake", email: 'c@d', phone: '111' },
		{ nome: "lettuce", email: 'l@g', phone: '222' },
		{ nome: "donut", email: 'd@f', phone: '3333' }
	];

	var result = await mdbDAO.insertMulti(collection, docs);

	if (result.acknowledged) {
		var msg =  `${result.insertedCount}` + " documentos inseridos";
	}
	else {
		var msg = "Falha ao inserir os documentos";
	}

	res.send(msg);
});

app.get("/insertone", async (req, res) => {
	
	const doc = { nome: "D/D/D", email: 'D@ddd', phone: '666' };

	var result = await mdbDAO.insertOne(collection, doc);

	if (result.acknowledged) {
		var msg = " documento inserido";
	}
	else {
		var msg = "Falha ao inserir o documento";
	}

	res.send(msg);
});

// apaga um registro
app.get("/deleteone", async (req, res) => {
	const query = { nome: "cake" };

	var result = await mdbDAO.deleteOne(collection, query);

	if (result.deletedCount === 1) {
		res.send("Um documento excluído.");
	} else {
		res.send("Nenhum documento encontrado para exclusão.");
	}
	//res.send(result)
});

app.get("/deletemulti", async (req, res) => {
	const query = { nome: "cake" };

	var result = await mdbDAO.deleteOne(collection, query);

	if (result.deletedCount === 1) {
		res.send("Um documento excluído.");
	} else {
		res.send("Nenhum documento encontrado para exclusão.");
	}
	//res.send(result)
});

// atualiza registros
app.get("/updateone", async (req, res) => {
	// Update the first document that matches the filter
	const result = await mdbDAO.updateOne(collection);

	res.send(`${result.matchedCount} documento(s) encontrados, atualizados ${result.modifiedCount} documento(s)`);
});


app.listen(3000, () => {
	console.log("Servidor iniciado...")
});
