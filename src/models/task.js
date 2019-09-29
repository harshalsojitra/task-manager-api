const mongoose = require('mongoose')

//use model instead of schema like user.js because schema made for unique user as it contains sensitive info. while this model contains only tasks here only owner is important do line 16.  
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        trim: true,
        required: true
    }, 
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User'
    }, 
}, {
    timestamps: true
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task