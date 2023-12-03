
const jwt = require('jsonwebtoken');

const generateAccessToken = (userId,clientId ) => {
	const accessToken = jwt.sign(
		{
			id: userId,
			client:clientId,
		},
		'SECRET',
		{ expiresIn: '7d' }
	);
	return "Bearer "+accessToken;
};

module.exports = generateAccessToken;

