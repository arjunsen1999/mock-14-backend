const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    level : {
        type : String,
        default : "Low"
    }
},{
    versionKey : false,
    timestamps : true
})

const userModel = mongoose.model("user", userSchema);
module.exports = {userModel}