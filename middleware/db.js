const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/';


const connectDB = async () => {
	try {
		const conn = await mongoose.connect(mongoURI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			dbName: 'medace',
		});
          
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.log(`Error: ${error.message}`);
		process.exit();
	}
};

module.exports = connectDB;


