const multer = require('multer');
const  {v4: uuidv4} = require('uuid');
// const storage = multer.diskStorage({
//   destination: (req, file,cb) => {
//     cb(null, 'client'); // The folder where images will be stored locally
//   },
//   filename: (req, file, cb) => {
//     const filename = req.params.id + '.svg'; // Use the FloorId as the filename
//     cb(null, filename);
//   },
// });
const DIR = '../public';
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
	
		cb(null, DIR);
	},
	filename: (req, file, cb) => {
		const fileName = file.originalname.toLowerCase().split(' ').join('-');
		console.log(fileName);
		cb(null, uuidv4() + '-' + fileName);
	}
});
var upload = multer({
	storage: storage,
	fileFilter: (req, file, cb) => {
		if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg'||file.mimetype == 'image/svg') {
			console.log('done');  
			cb(null, true);
         
		} else {
			cb(null, false);
			return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
		}
	}
}).single('profileImg');

var enclosure_pic = multer({
	
	storage: storage,
	fileFilter: (req, file, cb) => {
		
		if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg'||file.mimetype == 'image/svg') {
		
			cb(null, true);
         
		} else {
			cb(null, false);
			return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
		}
	}
}).array('enclosure', 2);


var svg_map = multer({
	storage: storage,
	fileFilter: (req, file, cb) => {
		if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg'||file.mimetype == 'image/svg') {
			console.log('done');  
			cb(null, true);
         
		} else {
			cb(null, false);
			return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
		}
	}
}).single('svg');

var map=multer({
	storage: storage,
	fileFilter: (req, file, cb) => {
		if (file.mimetype == 'image/svg+xml') {
			console.log('done');  
			cb(null, true);
         
		} else {
			cb(null, false);
			return cb(new Error('Only .svg format allowed!'));
		}
	}
}).single('map');

// const upload = multer({ storage: storage });

module.exports = {upload,enclosure_pic,svg_map,map};
