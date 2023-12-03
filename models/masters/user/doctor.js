const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
	name: { 
		type: String, 
		required:true
	},
	mobile_number: { 
		type: Number, 
		required:true
	},
	password: { 
		type: String, 
		required:true
	},
	personal_Id: { 
		type: String,
		default: null
	},
    country: { 
		type: String, 
		required:true
	},
	country_location: { 
		type: Array, 
		required:true
	},
	state: { 
		type: String, 
		required:true
	},
	otp:{
		type: String, 
		required:true
	},
	state_location: { 
		type: Array, 
		required:true
	},
	city: { 
		type: String, 
		required:true
	},
	city_location: { 
		type: Array, 
		required:true
	},
  	verified_documents: {
		type:Array,
		default:null
  	},
	verified:{
		type:Boolean,
		default:false
	},
	chamber_locations: {
		type:Array,
		default:null
	}
});

const  Doctor = mongoose.model('doctors', DoctorSchema);

module.exports =  Doctor;
