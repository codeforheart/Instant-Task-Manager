const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    description: String,
    date: Date,
    complete: Boolean
});

module.exports = mongoose.model('Task', taskSchema);