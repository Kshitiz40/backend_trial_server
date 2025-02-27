const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    price : Number,
    description : String,
    discount : {
        type : Number,
        default : 0,
    },
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref  : 'categories',
    },
    images : [
        {
            data : Buffer,
            contentType : String,
        }
    ]
})

module.exports = mongoose.model('Product',productSchema);