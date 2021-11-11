const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({})
const Project = mongoose.model('project', projectSchema, 'Project')

module.exports = mongoose.model('Project', projectSchema)