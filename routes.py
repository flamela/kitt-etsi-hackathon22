from wsgiref import headers
from flask_socketio import SocketIO
from flask import Flask, render_template, request, Response
from flask_restx import Resource, Api

import json
import time
import requests
import os
import concurrent.futures

#socketio = SocketIO(logger=True, engineio_logger=True)
socketio = SocketIO()
app = Flask(__name__)
api = Api()
pool = concurrent.futures.ThreadPoolExecutor(max_workers=1)

def register_extensions(app):
    api.init_app(app)
    socketio.init_app(app)    

def create_app():    
    register_extensions(app)
    return app

def get_car_position():
    while True:
        URL = "https://try-mec.etsi.org/sbx9tmr0q0/gis/v1/geodata?excludePath=true"
        HEADERS = {"Accept": "application/json", 
                    "Content-Type": "application/json",
                    "Cookie": os.getenv('SANDBOX_COOKIE'),
                    "Host": "try-mec.etsi.org",
                    "Referer": "https://try-mec.etsi.org/",
                    "Sec-Fetch-Dest": "empty",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Site": "same-origin"
                }
        r = requests.get(url = URL, headers = HEADERS).json()
        for geodata_asset in r["geoDataAssets"]:
            if (geodata_asset['assetName'] == '10.100.0.1'):
                #app.logger.info(geodata_asset['location']['coordinates'])
                socketio.emit('car_location', geodata_asset['location']['coordinates'])
                socketio.emit('car_location_coverage', geodata_asset['location']['coordinates'])
        time.sleep(1)

@socketio.on('connect')
def sio_connect():
    app.logger.info("socketio connected!!!!!!!")
    
    #executing the infinite loop using another thread
    pool.submit(get_car_position)

@socketio.on("network_information_ccar")
def send_network_notification(network_info): 
    ccar_ip = os.getenv('CCAR_IP')
    ccar_port = os.getenv('CCAR_PORT')
    URL = "http://"+ccar_ip+":"+ccar_port+"/api/ccar/network"
    headers = {'Content-Type': 'application/json'}
    app.logger.info("=======> Sending Network Information to URL="+URL)    
    res = requests.post(URL, json=network_info, headers=headers)
    socketio.emit("network_information_operator", network_info);

@socketio.on("v2x_qos")
def get_v2x_qos(destiny): 
    app.logger.info("====> Getting predicted QoS")

    URL = "https://try-mec.etsi.org/sbx9tmr0q0/mep1/vis/v2/provide_predicted_qos"
    HEADERS = {"Accept": "application/json", 
                "Content-Type": "application/json",
                "Cookie": os.getenv('SANDBOX_COOKIE'),
                "Host": "try-mec.etsi.org",
                "Referer": "https://try-mec.etsi.org/",
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-origin"
            }

    requet_body = '{"locationGranularity": "geoData","routes": [{"routeInfo": [{"location": {"geoArea": {"latitude": 43.738760,"longitude": 7.428264}}},{"location": {"geoArea": {"latitude": "","longitude": ""}}}]}]}'
    data = json.loads(requet_body)

    if (destiny == "green"):
        data["routes"][0]["routeInfo"][1]["location"]["geoArea"]["latitude"] = 43.743010
        data["routes"][0]["routeInfo"][1]["location"]["geoArea"]["longitude"] = 7.429504
    elif (destiny == "purple"):
        data["routes"][0]["routeInfo"][1]["location"]["geoArea"]["latitude"] = 43.733616
        data["routes"][0]["routeInfo"][1]["location"]["geoArea"]["longitude"] = 7.416715

    
    res = requests.post(url = URL, json=data, headers = HEADERS)    
    app.logger.info("<==== Predicted QoS:")
    app.logger.info(json.dumps(res.json(), indent=4, sort_keys=True))   
    socketio.emit('v2x', res.json()) 


@app.route('/map')
@app.route('/map.html')
def map():
    return render_template("home/map.html")

@app.route('/')
@app.route('/car')
@app.route('/car.html')
def car():
    return render_template("home/car.html")  

@app.route('/operator')
@app.route('/operator.html')
def operator():
    return render_template("home/operator.html")

@app.route('/mmtc')
@app.route('/mmtc.html')
def mmtc():
    return render_template("home/mmtc.html")    

@api.route('/api/ccar/network')
class CcarMock(Resource):

    def post(self):
        app.logger.info("<===== CcarMock. Network Information: ")        
        data = json.loads(request.data)
        app.logger.info(json.dumps(data, indent=4, sort_keys=True))

        return Response(status=201)

@api.route('/callbacks/location/<string:loc_subs_type>')
class Location(Resource):
    
    def post(self, loc_subs_type):
       # app.logger.info("API CALL: %s POST. Location subscription: %s", self.__class__.__name__, loc_subs_type)        
        
        data = json.loads(request.data)
        #app.logger.info(json.dumps(data, indent=4, sort_keys=True))
        #if (data["zonalPresenceNotification"]["userEventType"] == "Leaving"):
        #    mqtt.publish(connectivity_topic, "{\"conectivity\": \"DISCONNECTED\"}")
        
        socketio.emit('location_message', {'msg': data})
        
        return Response(status=201)

@api.route('/callbacks/rni/<string:radio_type>')
class RadioNetworkInformation(Resource):
    
    def post(self, radio_type):
        #app.logger.info("API CALL: %s POST. Radio type: %s", self.__class__.__name__, radio_type)
        
        data = json.loads(request.data)
        #app.logger.info(json.dumps(data, indent=4, sort_keys=True))
        """ if (radio_type == "4g"):
            mqtt.publish(connectivity_topic, "{\"conectivity\": \"4G\"}")
        else:
            mqtt.publish(connectivity_topic, "{\"conectivity\": \"5G\"}") """
        
        socketio.emit('rni_message', {'msg': data, 'radio_type': radio_type})
        
        return Response(status=201)

@api.route('/callbacks/wai/<string:wifi_type>')
class WlanAccessInformation(Resource):
    
    def post(self, wifi_type):
        #app.logger.info("API CALL: %s POST. %s", self.__class__.__name__, wifi_type)
        
        data = json.loads(request.data)
        #app.logger.info(json.dumps(data, indent=4, sort_keys=True))

        #if (wifi_type == "wifi"):
        #    mqtt.publish(connectivity_topic, "{\"conectivity\": \"WIFI\"}")
        
        socketio.emit('wai_message', {'msg': data, 'wifi_type': wifi_type})
        
        return Response(status=201)    