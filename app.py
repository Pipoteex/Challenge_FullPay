from flask import Flask, jsonify
import json
import pandas as pd
from flask_cors import CORS



app = Flask(__name__)

CORS(app) 

@app.route('/datos-json', methods=['GET'])
def datos_json():
    with open('data.json') as f:
        datos = json.load(f)
        
    return jsonify(datos)

@app.route('/datos-csv', methods=['GET'])
def datos_csv():
    datos = pd.read_csv('data.csv')
    return jsonify(datos.to_dict(orient='records'))

if __name__ == '__main__':
    app.run(debug=True)