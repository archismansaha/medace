
const jwt = require('jsonwebtoken');

// const refreshTokenMiddleware = require('./refreshTokenMiddleware');

const verifyHeader = async (req, res, next) => {
	try {
		const authHeader = req.header('Authorization');
		// console.log(authHeader);
		if(!authHeader){
			next({name:"ValidationError" ,message:"Invalid Auth Header"});
		}
		else{
			
			
		if (!authHeader?.startsWith('Bearer '))
			return res.status(400).json({ status: false, result: null, message: 'You are unAuthorized' });

		const accessTokenParts = authHeader.split(' ');
		const aTkn = accessTokenParts[1];

		try {
			const decoded = jwt.verify(aTkn, 'SECRET');
			req.userId = decoded.id;
			req.client=decoded.client;
			// console.log("ID:",decoded.id,decoded.client)
			next();
		} catch (error) {
			return next(error);
	
		}
	}
	} catch (error) {
		return next(error);
	}
};

module.exports = {verifyHeader};
