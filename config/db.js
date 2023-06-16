require('dotenv').config();
const mongoose = require('mongoose');
module.exports = connect = () => {
    return mongoose.connect('mongodb+srv://vivek:vivek@cluster0.zov7tys.mongodb.net/rohitbackend?retryWrites=true&w=majority');
}