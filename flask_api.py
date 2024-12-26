import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import joblib

# Load dataset
data = pd.read_csv('student_data.csv')

# Handle missing values
data = data.dropna()

# Separate features and target variable
X = data.drop('performance', axis=1)
y = data['performance']

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize and train the Random Forest model
model = RandomForestClassifier(random_state=42)
model.fit(X_train, y_train)

# Evaluate model accuracy
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f'Model Accuracy: {accuracy * 100:.2f}%')

# Save the trained model for deployment
joblib.dump(model, 'student_performance_model.pkl')
```

### 2. Flask API for Model Deployment
```python
from flask import Flask, request, jsonify
import joblib
import pandas as pd

# Load the trained model
model = joblib.load('student_performance_model.pkl')

# Initialize Flask app
app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    # Parse input JSON data
    input_data = request.get_json()
    input_df = pd.DataFrame([input_data])

    # Make prediction
    prediction = model.predict(input_df)
    result = {'prediction': prediction[0]}

    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
```

### 3. Integration with Node.js
- Use `axios` or a similar library in your Node.js backend to send HTTP requests to the Flask API.
- Example endpoint in Node.js:

```javascript
const axios = require('axios');

app.post('/student-performance', async (req, res) => {
    try {
        const response = await axios.post('http://localhost:5000/predict', req.body);
        res.status(200).send(response.data);
    } catch (error) {
        res.status(500).send({ error: 'Prediction failed' });
    }
});
