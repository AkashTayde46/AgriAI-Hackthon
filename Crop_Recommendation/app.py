from flask import Flask, request, render_template, jsonify
from flask_cors import CORS
import joblib
import pandas as pd

app = Flask(__name__)
CORS(app)

model = joblib.load("D:\Projects\AgriAI\Crop_Recommendation\crop_recommendation.pkl")

NUMERIC_FEATURES = ["N", "P", "K", "temperature", "humidity", "ph", "rainfall"]

label_map = {
    0: 'rice', 1: 'maize', 2: 'chickpea', 3: 'kidneybeans', 4: 'pigeonpeas',
    5: 'mothbeans', 6: 'mungbean', 7: 'blackgram', 8: 'lentil', 9: 'pomegranate',
    10: 'banana', 11: 'mango', 12: 'grapes', 13: 'watermelon', 14: 'muskmelon',
    15: 'apple', 16: 'orange', 17: 'papaya', 18: 'coconut', 19: 'cotton',
    20: 'jute', 21: 'coffee'
}

rainfall_map = {'Very High': 1, 'High': 2, 'Medium': 3, 'Low': 4}
ph_map = {'Neutral': 1, 'Alkaline': 2, 'Acidic': 3}


@app.route("/", methods=["GET"])
def index():
    return render_template("index.html",
                           rainfall_options=list(rainfall_map.keys()),
                           ph_options=list(ph_map.keys()))

@app.route("/test", methods=["GET"])
def test():
    return jsonify({
        "status": "success",
        "message": "Smart Health Diagnostics API is running",
        "model_loaded": model is not None,
        "supported_crops": list(label_map.values()),
        "ph_options": list(ph_map.keys()),
        "rainfall_options": list(rainfall_map.keys())
    })


@app.route("/predict", methods=["POST"])
def predict():
    try:
        # Check if request is JSON or form data
        if request.is_json:
            data = request.get_json()
        else:
            data = request.form
        
        print(f"Received data: {data}")  # Debug log
        
        # Extract numeric features with validation
        values = {}
        for feature in NUMERIC_FEATURES:
            if feature not in data:
                raise ValueError(f"Missing required field: {feature}")
            try:
                values[feature] = float(data[feature])
            except (ValueError, TypeError):
                raise ValueError(f"Invalid value for {feature}: {data[feature]}")

        # Extract categorical features
        if "ph_category" not in data:
            raise ValueError("Missing required field: ph_category")
        if "rainfall_level" not in data:
            raise ValueError("Missing required field: rainfall_level")
            
        ph_category = data["ph_category"]
        rainfall_level = data["rainfall_level"]

        # Validate categorical values
        if ph_category not in ph_map:
            raise ValueError(f"Invalid ph_category: {ph_category}. Must be one of {list(ph_map.keys())}")
        if rainfall_level not in rainfall_map:
            raise ValueError(f"Invalid rainfall_level: {rainfall_level}. Must be one of {list(rainfall_map.keys())}")

        # Convert categorical to numeric
        values["ph_category"] = ph_map[ph_category]
        values["rainfall_level"] = rainfall_map[rainfall_level]

        # Calculate derived features
        values["NPK"] = (values["N"] + values["P"] + values["K"]) / 3
        values["THI"] = (values["temperature"] * values["humidity"]) / 100
        values["temp_rain_interaction"] = values["temperature"] * values["rainfall"]
        values["ph_rain_interaction"] = values["ph"] * values["rainfall"]

        # Define the expected column order for the model
        expected_columns = [
            'N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall',
            'ph_category', 'rainfall_level', 'NPK', 'THI', 
            'temp_rain_interaction', 'ph_rain_interaction'
        ]
        
        # Create DataFrame with proper column order
        df_data = [values[col] for col in expected_columns]
        df = pd.DataFrame([df_data], columns=expected_columns)
        
        print(f"DataFrame shape: {df.shape}")
        print(f"DataFrame columns: {df.columns.tolist()}")
        print(f"DataFrame values: {df.values}")

        # Make prediction
        pred = model.predict(df)
        print(f"Model prediction: {pred}")

        # Get label
        pred_value = int(pred[0])
        if pred_value in label_map:
            label = label_map[pred_value]
        else:
            # If prediction is out of range, return a default recommendation
            print(f"Warning: Unknown prediction result: {pred_value}, using default")
            label = "rice"  # Default fallback

        # Return JSON response for API calls
        if request.is_json:
            return jsonify({
                "success": True,
                "prediction": label,
                "confidence": "High"
            })
        else:
            # Return HTML template for web form
            return render_template("index.html",
                                   rainfall_options=list(rainfall_map.keys()),
                                   ph_options=list(ph_map.keys()),
                                   prediction=label)

    except Exception as e:
        print(f"Error in predict: {str(e)}")  # Debug log
        if request.is_json:
            return jsonify({
                "success": False,
                "error": str(e)
            }), 400
        else:
            return render_template("index.html",
                                   rainfall_options=list(rainfall_map.keys()),
                                   ph_options=list(ph_map.keys()),
                                   error=str(e))


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)