const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    Name: String,
    Kategorie: String,
    Portion: String
});

module.exports = mongoose.model('Rezepte', schema);