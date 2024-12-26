const axios = require('axios');
const Student = require('../models/student');

// Function to predict student performance based on inputs
const predictPerformance = async (req, res) => {
    const { study_hours, attendance, previous_scores } = req.body;

    try {
        // Store the student data in MongoDB
        const newStudent = new Student({ study_hours, attendance, previous_scores });
        await newStudent.save();

        // Call Python model for prediction
        const response = await axios.post('http://localhost:5000/predict', { study_hours, attendance, previous_scores });

        res.json({
            predicted_score: response.data.predicted_score,
            intervention: response.data.intervention
        });
    } catch (error) {
        console.error('Error predicting performance:', error);
        res.status(500).json({ message: 'Error predicting performance' });
    }
};

module.exports = { predictPerformance };
