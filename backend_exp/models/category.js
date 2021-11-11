const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'expense'
    }
})


module.exports = mongoose.model('category', categorySchema)

