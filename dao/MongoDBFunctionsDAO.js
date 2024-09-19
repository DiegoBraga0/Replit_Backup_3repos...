class mdbDAO {
	
	// codigo para consultar um documento
	static async queryOne(collection) {
		// dados da consulta
		const query = {email:'D@ddd'  };
		const options = {
			// Sort matched documents in descending order by rating
			sort: { "nome": -1 },
			// Include only the `title` and `imdb` fields in the returned document
			projection: { _id: 0},
		};
		//realiza a consulta
		const result = await collection.findOne(query, options);
		// resultados da consulta
		return result;
	}

	// consulta multiplos documentos no BD
	static async queryMulti(collection) {
		const query = { };
		const cursor = await collection.find(query).toArray();

		return cursor
	}

	static async insertOne(collection, docs) {
		const result = await collection.insertOne(docs);

		return result;

	}
	// insere multiplos documentos no BD
	static async insertMulti(collection, docs) {
		// Prevent additional documents from being inserted if one fails
		const options = { ordered: true };
		// Execute insert operation
		const result = await collection.insertMany(docs, options);

		return result;
	}
	static async deleteOne(collection, query) {
		const result = await collection.delete(query);

		return result
	}

	static async deleteMulti(collection, query) {
		const result = await collection.delete(query);

		return result
	}
	
	static async updateOne(collection) {
		const filter = { nome: null };
		/* Set the upsert option to insert a document if no documents match
		the filter */
		const updateDoc = {
			$set: {
				nome: 'Not Null', phone: '12345678'
			}
		};
		const options = { upsert: true };
		// Update the first document that matches the filter
		const result = await collection.updateOne(filter, updateDoc, options);

		return result;
	}

	static async updateMult(collection) {
		const filter = { nome: null };
		/* Set the upsert option to insert a document if no documents match
		the filter */
		const updateDoc = {
			$set: {
				nome: 'Not Null', phone: '12345678'
			}
		};
		const options = { upsert: true };
		// Update the first document that matches the filter
		const result = await collection.updateOne(filter, updateDoc, options);

		return result;
	}
	
}

module.exports = mdbDAO
