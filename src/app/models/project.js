const bcrypt = require('bcryptjs');
const mongoose = require('../../database');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    },
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        REF: 'Task'
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;