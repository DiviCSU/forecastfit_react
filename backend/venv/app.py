# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allows cross-origin requests from the React frontend

@app.route('/subscribe', methods=['POST'])
def subscribe():
    data = request.json
    location = data.get("location")
    phone = data.get("phone")
    time = data.get("time")

    # Log the subscription data
    print(f"Subscription: Location={location}, Phone={phone}, Time={time}")

    # Return a success message
    return jsonify({"message": "Subscription successful!"}), 200

if __name__ == "__main__":
    app.run(debug=True)
