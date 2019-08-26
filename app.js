const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const multer = require('multer');

const db = require('./config/db');
db()

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
        // new Date().toISOString() + '-' +
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        cb(null, true)
    }else {
        cb(null, false)
    }
}

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('image'))

app.use(express.static(`${__dirname}/public`));
app.use('/images',express.static(`${__dirname}/images`));

const index = require('./routes/index');
app.use('/', index)

app.listen(3000, () => console.log('run port: 3000'))