const UserMaster = require('../../../models/masters/user/patient');
const generateAccessToken = require('../../../middleware/auth/access-token');
const mongoose=require('mongoose');
const authController = {
	// loginUser: async (req, res, next) => {
	// 	try {
	// 		const { user_identifier, password } = req.body;

		
	// 		const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user_identifier);
	// 		const isValidMobile = /^\d{10}$/.test(user_identifier);

	// 		if (!isValidEmail && !isValidMobile) {
	// 			return next({ name: 'BadRequestError', message: 'Invalid user identifier format' });
	// 		}

	// 		let user = null;
	// 		if (isValidEmail) {
	// 			user = await UserMaster.findOne({ user_email: user_identifier, del_flag: 0 });
	// 		} else {
	// 			user = await UserMaster.findOne({ user_mobile: user_identifier, del_flag: 0 });
	// 		}

	// 		if (!user) {
	// 			return next({statusCode:404,name: 'NotFoundError', message: 'User not found' });
	// 		}

	
	// 		if (user.password !== password) {
	// 			return next({ statusCode:400,name: 'BadRequestError', message: 'Invalid password' });
	// 		}

	// 		return res.status(200).json({ success: true, user_id: user._id });
	// 	} catch (error) {
	// 		return next({ name: 'InternalServerError', message: 'Failed to log in' });
	// 	}
	// },



	loginUser: async (req, res, next) => {
		try {
			const { mobile, password } = req.body;
			const verify_mobile = /^\d{10}$/.test(mobile);

			if (!verify_mobile) {
				return next({ name: 'BadRequestError', message: 'Invalid mobile number'});
			}

			let user = null;
			
			user = await UserMaster.findOne({ user_mobile: user_identifier, del_flag: 0 });
			
			if (!user) {
				return next({statusCode:404,name: 'NotFoundError', message: 'User not found' });
			}
			// console.log('req.body.password');
			// console.log(user.password);

	
			if (user.password != password) {
				return next({ statusCode:400,name: 'BadRequestError', message: 'Invalid password' });
			}      
		    const jwt=generateAccessToken(user._id,user.client);

			return res.status(200).json({ success: true,userId:user._id,token:jwt});
		} catch (error) {
			return next({ name: 'InternalServerError', message: 'Failed to log in' });
		}
	},
};

module.exports = {authController};
