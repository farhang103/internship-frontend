const mongoose = require('mongoose');

async function connectMongoDB() {
    await mongoose.connect('mongodb+srv://intern:nura@cluster0.zdpgp.mongodb.net/internship?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
};

module.exports.connectMongoDB = connectMongoDB;
