from flask import Flask
from flask import jsonify 
from flask_restful import Resource, Api

app = Flask(__name__)

api = Api(app)

prod1 = {}
prod1["reference"] = "25W1456"
prod1["prix"]      = 45
prod1["poid"]      = 1

prod2 = {}
prod2["reference"] = "25W1456"
prod2["prix"]      = 45
prod2["poid"]      = 1
    
    
listprod = [
    prod1,
    prod2
    ]

class produits(Resource):
    def get(self):
        return jsonify(listprod)

api.add_resource(produits, '/')

if __name__ == '__main__':
    app.run(host = "127.0.0.1", port = 5000)