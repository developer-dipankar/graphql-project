const mongoose = require('mongoose');

const Users = mongoose.model('users', new mongoose.Schema({
    firstname: String,
    lastname: String
}));

module.exports = {Users};