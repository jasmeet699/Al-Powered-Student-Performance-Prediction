
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    study_hours: {
        type: Number,
        required: true
    },
    attendance: {
        type: Number,
        required: true
    },
    previous_scores: {
        type: Number,
        required: true
    }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
