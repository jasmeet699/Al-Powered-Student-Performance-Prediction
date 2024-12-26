import React from 'react';

const PredictionResult = ({ prediction }) => {
    return (
        <div>
            <h3>Prediction Result</h3>
            <p>Predicted Score: {prediction?.predicted_score}</p>
            <p>Suggested Intervention: {prediction?.intervention}</p>
        </div>
    );
};

export default PredictionResult;
