const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    Name: String,
    Portion: String,
});

module.exports = mongoose.model('Rezept', schema);