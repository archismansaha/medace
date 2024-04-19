const Doctor = require('../../../models/masters/user/doctor');
const uuid = require('uuid');
const doctorController = {
  // CREATE
  addDoctor: async (req, res, next) => {
    try {
      const {
        name,
        mobile_number,
        password,
        country,
        country_location,
        state,
        otp,
        state_location,
        city,
        city_location,
        verified_documents,
        chamber_locations,
      } = req.body;
	  const personal_Id ='DOC '+uuid.v4().substr(0, 6);
	  console.log(personal_Id);
      const newDoctor = new Doctor({
        name,
        mobile_number,
        password,
        personal_Id,
        country,
        country_location,
        state,
        otp,
        state_location,
        city,
        city_location,
        verified_documents,
        chamber_locations,
      });

      await newDoctor.save();

      return res.status(201).json({ success: true, data: newDoctor });
    } catch (error) {
      return next(error);
    }
  },

  // READ
  getDoctorById: async (req, res, next) => {
    try {
      const doctorId = req.params.id;
      const doctor = await Doctor.findById(doctorId);

      if (doctor) {
        return res.status(200).json({ success: true, data: doctor });
      } else {
        return next({ name: 'NotFoundError', message: 'Doctor not found' });
      }
    } catch (error) {
      return next(error);
    }
  },
//GET
  getAllDoctors: async (req, res, next) => {
    try {
      // const doctors = await Doctor.find({});
      return res.status(200).json({ success: true, data: "doctors" });
    } catch (error) {
      return next(error);
    }
  },

  // UPDATE
  updateDoctor: async (req, res, next) => {
    try {
      const doctorId = req.params.id;
      const updateData = req.body;

      const updatedDoctor = await Doctor.findByIdAndUpdate(doctorId, updateData, {
        new: true,
        runValidators: true,
      });

      if (updatedDoctor) {
        return res.status(200).json({ success: true, data: updatedDoctor });
      } else {
        return next({ name: 'NotFoundError', message: 'Doctor not found' });
      }
    } catch (error) {
      return next(error);
    }
  },

  // DELETE
  deleteDoctor: async (req, res, next) => {
    try {
      const doctorId = req.params.id;
      const deletedDoctor = await Doctor.findByIdAndDelete(doctorId);

      if (deletedDoctor) {
        return res.status(200).json({ success: true, message: 'Doctor deleted successfully' });
      } else {
        return next({ name: 'NotFoundError', message: 'Doctor not found' });
      }
    } catch (error) {
      return next(error);
    }
  },
  //CODE
  getDoctorBycode: async (req, res, next) => {
    try {
      const doctorId = req.query.code;
      const doctor = await Doctor.findOne({personal_Id:doctorId});

      if (doctor) {
        return res.status(200).json({ success: true, data: doctor });
      } else {
        return next({ name: 'NotFoundError', message: 'Doctor not found' });
      }
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = {doctorController};
