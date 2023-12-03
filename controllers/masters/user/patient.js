const Patient = require('../../../models/masters/user/patient');
const uuid = require('uuid');

const patientController = {
  // CREATE
  addPatient: async (req, res, next) => {
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
        age,
        height,
        weight,
        sugar,
        bloodgroup,
        gender,
        pressure,
        verified_documents,
        chamber_locations,
      } = req.body;

      const personal_Id = 'PAT ' + uuid.v4().substr(0, 6);
      console.log(personal_Id);

      const newPatient = new Patient({
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
        age,
        height,
        weight,
        sugar,
        bloodgroup,
        gender,
        pressure,
        chamber_locations,
      });

      await newPatient.save();

      return res.status(201).json({ success: true, data: newPatient });
    } catch (error) {
      return next(error);
    }
  },

  // READ
  getPatientById: async (req, res, next) => {
    try {
      const patientId = req.params.id;
      const patient = await Patient.findById(patientId);

      if (patient) {
        return res.status(200).json({ success: true, data: patient });
      } else {
        return next({ name: 'NotFoundError', message: 'Patient not found' });
      }
    } catch (error) {
      return next(error);
    }
  },

  // GET ALL
  getAllPatients: async (req, res, next) => {
    try {
      const patients = await Patient.find({});
      return res.status(200).json({ success: true, data: patients });
    } catch (error) {
      return next(error);
    }
  },

  // UPDATE
  updatePatient: async (req, res, next) => {
    try {
      const patientId = req.params.id;
      const updateData = req.body;

      const updatedPatient = await Patient.findByIdAndUpdate(
        patientId,
        updateData,
        { new: true, runValidators: true }
      );

      if (updatedPatient) {
        return res.status(200).json({ success: true, data: updatedPatient });
      } else {
        return next({ name: 'NotFoundError', message: 'Patient not found' });
      }
    } catch (error) {
      return next(error);
    }
  },

  // DELETE
  deletePatient: async (req, res, next) => {
    try {
      const patientId = req.params.id;
      const deletedPatient = await Patient.findByIdAndDelete(patientId);

      if (deletedPatient) {
        return res
          .status(200)
          .json({ success: true, message: 'Patient deleted successfully' });
      } else {
        return next({ name: 'NotFoundError', message: 'Patient not found' });
      }
    } catch (error) {
      return next(error);
    }
  },

  // GET BY CODE
  getPatientByCode: async (req, res, next) => {
    try {
      const patientCode = req.query.code;
      const patient = await Patient.findOne({ personal_Id: patientCode });

      if (patient) {
        return res.status(200).json({ success: true, data: patient });
      } else {
        return next({ name: 'NotFoundError', message: 'Patient not found' });
      }
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = { patientController };
