const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    full_name: {
        type: String,
        required: true
    },
    d_o_b: {
        type: String,
        required: true
    },
    blood_type: {
        type: String,
        required: true
    },
    mobile: {
        type: [String], 
        required: true
    },
    township: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Posts', PostSchema);