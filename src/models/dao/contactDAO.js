class ContactsDAO {
	static async findContactByEmail(client, email) {
		try {
			const result = await client
				.db('Tic-Tac-Toe') // Tirar o maiusculo
				.collection('users')
				.find({ email: email })
				.project({ _id: 0 });
			return await result.toArray();
		} catch (err) {
			console.log(err);
		}
	}

	static async findContactByUser(client, user) {
		try {
			const result = await client
				.db('Tic-Tac-Toe')
				.collection('users')
				.find({ username: user })
				.project({ _id: 0 });
			return await result.toArray();
		} catch (err) {
			console.log(err);
		}
	}

	static async insertContact(client, contact) {
		try {
			const result = await client
				.db('Tic-Tac-Toe')
				.collection('users')
				.insertOne(contact);
			return result;
		} catch (err) {
			console.log(err);
		}
	}

	static async updateContact(client, email, doc) {
		try {
			const filter = { email: email };
			const newValues = {$set: {
				name: doc.name, phone: doc.phone, address: 
				{street: doc.address.street, comp: doc.address.comp, zipcode: doc.address.zipcode}}}
			const result = await client
				.db('Tic-Tac-Toe')
				.collection('users')
				.updateOne(filter, newValues);
			return result;
		} catch (err) {
			console.log(err);
		}
	}

	static async deleteContactByEmail(client, email) {
		try {
			const result = await client
				.db('Tic-Tac-Toe')
				.collection('users')
				.deleteOne({email: email});
			return result;
		} catch (err) {
			console.log(err);
		}
	}

	static async listContacts(client) {
		try {
			const query = {};
			const options = {
				sort: { name: 1 },
				projection: { _id: 0}
			};
			const results = await client
				.db('Tic-Tac-Toe')
				.collection('users')
				.find(query, options);
			return await results.toArray();
		} catch (err) {
			console.log(err);
		} finally {
			await client.close()
		}
	}

}

module.exports = ContactsDAO;