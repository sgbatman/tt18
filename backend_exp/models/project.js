const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true,
    },
    description: {
        type: Date,
        required: true
    }
})


module.exports = mongoose.model('project', projectSchema)

