

const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    fullname:{
        type: String,
    required: true
    },
        email: {
        type: String,
    required: true
    },
        subject: {
        type: String,
    required: true
    },
        messages: {
        type: String,
    required: true
    }, 
},
    {
        collection:"customer",
        versionKey: false
    },
)
module.exports = mongoose.model('customer', userSchema);

