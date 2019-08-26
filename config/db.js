const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/fileUpload', {
            useCreateIndex: true,
            useNewUrlParser: true,
            useFindAndModify: false
        })
        console.log('MongoDB 接続...')
    } catch (err) {
        console.log(err.message);
        // Exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;