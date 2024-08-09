const mongoose = require('mongoose')
const schema = mongoose.Schema

const stud_demo = new schema({
    name: {
        type: String,
        require: true
    },
    rollno: {
        type: String,
        require: true
    },
    department: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    }
})

module.exports.student = new mongoose.model('student', stud_demo)