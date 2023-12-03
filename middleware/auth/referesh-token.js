const jwt = require('jsonwebtoken');
const generateAccessToken = require('./generateAccessToken');

const refreshTokenMiddleware = async (req, res, next) => {
	try {
		const refreshToken = req.cookies.refreshToken; 
		console.log('cookie'+req.cookies.refreshToken);
		if (!refreshToken) {
			return res.status(401).json({ status: false, result: null, message: 'Refresh token missing' });
		}

		// Verify the refresh token
		const decoded = jwt.verify(refreshToken, 'SECRET');
		if (!decoded) {
			return res.status(401).json({ status: false, result: null, message: 'Invalid refresh token' });
		}

		// Generate a new access token
		const newAccessToken = generateAccessToken(decoded._id, decoded.role,decoded.role_id);

		req.userId = decoded.id;
		req.role = decoded.role;
		req.role_id=decoded.role_id;
		req.newToken=true;
		req.token = newAccessToken;
		next();
	} catch (error) {
		return res.status(500).json({ success: false, result: null, message: error.message, error: error });
	}
};

module.exports =refreshTokenMiddleware;
