from flask import Flask
from flask import jsonify 
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)


@app.route("/prixliv/<float:poid>", )
def calculPoid(poid):
    return ""+str(poid*1.25);

if __name__ == '__main__':
    app.run(host = "127.0.0.1", port = 5001)