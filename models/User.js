const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
    name: String,
    description: {
        type: String,
        required: true
    },
    date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('User', UserSchema);