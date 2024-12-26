import React, { useState } from 'react';
import PredictionForm from './components/PredictionForm';
import PredictionResult from './components/PredictionResult';

const App = () => {
    const [prediction, setPrediction] = useState(null);

    return (
        <div>
            <h1>Student Performance Prediction</h1>
            <PredictionForm setPrediction={setPrediction} />
            {prediction && <PredictionResult prediction={prediction} />}
        </div>
    );
};

export default App;
