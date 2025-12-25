import os
import requests
from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_cors import CORS

load_dotenv()

app = Flask(__name__)
CORS(app)

VAPI_API_KEY = os.getenv("VAPI_API_KEY")

def fetch_call_details(call_id):
    url = f"https://api.vapi.ai/calls/{call_id}"  # ✅ FIXED ENDPOINT
    headers = {
        "Authorization": f"Bearer {VAPI_API_KEY}",
        "Content-Type": "application/json"
    }

    response = requests.get(url, headers=headers)

    # 🔍 DEBUG LOG
    print("Vapi status:", response.status_code)
    print("Vapi response:", response.text)

    if response.status_code != 200:
        raise Exception(f"Vapi error {response.status_code}: {response.text}")

    return response.json()

@app.route("/call-details", methods=["GET"])
def get_call_details():
    call_id = request.args.get("call_id")

    if not call_id:
        return jsonify({"error": "Call ID is required"}), 400

    try:
        data = fetch_call_details(call_id)

        return jsonify({
            "analysis": data.get("analysis"),
            "summary": data.get("summary")
        }), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
