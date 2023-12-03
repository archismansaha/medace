/* eslint-disable no-unused-vars */
const express = require('express');
const router = express.Router();
const { doctorController } = require('../controllers/masters/user/doctor');

const {authController}=require('../controllers/masters/auth/login');
const {verifyHeader}=require('../middleware/auth/jwt')
const errorHandler = require('../utils/error-handle');



router.get('/doctors/', doctorController.getAllDoctors);
router.post('/doctor/', doctorController.addDoctor);
router.put('/doctor/:id', doctorController.updateDoctor);
router.delete('/doctor/:id', doctorController.deleteDoctor);
router.get('/doctor/:id', doctorController.getDoctorById);
router.get('/doctor/', doctorController.getDoctorBycode);


// router.get('/', verifyHeader,userMasterCtrl.getAllUsers);
// router.post('/check',verifyHeader, authController.checkPassword);
// router.post('/create', userMasterCtrl.addUser);
// router.post('/update/:id', userMasterCtrl.updateUser);
// router.post('/delete/:id', userMasterCtrl.deleteUser);
// router.get('/get/:id', userMasterCtrl.getUser);
// router.post('/login', authController.loginUser);



router.use((req, res) => {
	res.status(404).json({ success: false, error: 'Route not found' });
});
router.use(errorHandler);

module.exports = router;
