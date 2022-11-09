const mongoose = require('mongoose');

const AddressSchema = mongoose.Schema({
    street:{
        type: String,
        required: true
    },
    township: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
});

const PostSchema = mongoose.Schema({
   
    full_name: {
        type: String,
        required: true
    },
    is_male: {
        type: Boolean,
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
    email: {
        type: String,
        required: true
    },
    address: {
        type: AddressSchema,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
    
    //timestamps: {
    //    type: Date,
    //    default: Date.now 
    //}
});

module.exports = mongoose.model('Posts', PostSchema);