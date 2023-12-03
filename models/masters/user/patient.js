const mongoose = require('mongoose');

const  PatientSchema = new mongoose.Schema({
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
	admin_password: { 
		type: String, 
		default: null 
	},
	age:{
		type:Number,
		default: null
	},
	height: {
		type:Number,
		default:null
	},
	weight:{
		type:Number,
		default:null,
	},
	sugar:{
		type:Object,
		default:null,
	},
	bloodgroup:{
		type:String,
		default:null
	},
	gender:{type:String,default:null},
	pressure:{
		type:Object,
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

const  Patient = mongoose.model('patient',  PatientSchema);

module.exports =  Patient;
