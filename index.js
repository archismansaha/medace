const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./middleware/db');


const app = express();


// connection to Database
connectDB();
const publicFolderPath = '../public';
app.use('/public', express.static(publicFolderPath));

app.use(helmet());
app.use(cors({ origin: '*' }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', require('./routes/index'));



const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log(`Express running → On PORT : ${PORT}`);
});
