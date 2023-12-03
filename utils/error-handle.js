/* eslint-disable no-unused-vars */
// customErrorHandler.js

const customErrorHandler = (err, req, res,next) => {


	let statusCode = err.statusCode || 500;
	let message = err.message || 'Internal Server Error';
	if (err.name === 'ValidationError') {
		statusCode = 500;
		const errors = {};
		
		for (const field in err.errors) {
			errors[field] = err.errors[field].message;
		}
		
	} else if (err.name === 'UnauthorizedError') {
		statusCode = 401;
		message = 'Unauthorized';
	}
   
	if(err.name=='NotFoundError'){
		statusCode=404;
	}
	else if(err.name=='ValidationError'){
		statusCode=403;
	}
	else if(err.name=='NotAllowed'){
		statusCode=409;
	}
	if(!err.message){
		if (statusCode === 400) {
			message = 'Bad Request';
		} else if (statusCode === 401) {
			message = 'Unauthorized';
		} else if (statusCode === 403) {
			message = 'Forbidden';
		} else if (statusCode === 404) {
			message = 'Not Found';
		} else if (statusCode === 412) {
			message = 'Precondition Failed';
		} else if (statusCode === 503) {
			message = 'Service Unavailable';
		}
	}
 console.log(err);
	res.status(statusCode).json({
		success: false,
		error: {
			message,
		},
	});
};
  
module.exports = customErrorHandler;
  