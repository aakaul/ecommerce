const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    _id:  mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: { type: String, required: true },
    role:{
        type: String,
        enum: ['Client', 'Manager', 'Admin'],
        default: 'Admin'
    }
});

module.exports = mongoose.model('Admin', adminSchema);
