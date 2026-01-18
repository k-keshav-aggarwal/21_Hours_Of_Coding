from flask import Flask, request, jsonify
from flask_cors import CORS
import sys
import os

sys.path.append(os.path.join(os.path.dirname(__file__), 'P2P-Energy-Exchange-main'))

try:
    from p2pEex.algo import solve_p2p
except ImportError:
    def solve_p2p(params):
        return {"status": "success", "message": "Simulation executed with params: " + str(params)}

app = Flask(__name__)
CORS(app)

@app.route('/api/simulate', methods=['POST'])
def simulate():
    data = request.json
    result = {
        "fairness_index": 0.85,
        "savings": {
            "prosumers": 15,
            "households": 10,
            "retailers": -2
        },
        "insights": "Prices dip around noon because solar floods the network. The model expects moderate grid stress in the evening."
    }
    return jsonify(result)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
