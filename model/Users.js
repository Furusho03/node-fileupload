const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {
        timestamps: true
});

const User = mongoose.model('User', UserSchema);

module.exports = User;