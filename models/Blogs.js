const mongoose = require('mongoose');

const Blogs = mongoose.model('blogs', new mongoose.Schema({
    title: String,
    description: String,
    author: String
}));

module.exports = {Blogs};