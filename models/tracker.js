const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trackerSchema = new Schema({
    inicio: Number,
    productos: Number,
    proyectos: Number
})

const Tracker = mongoose.model('Tracker', trackerSchema)
module.exports = Tracker;