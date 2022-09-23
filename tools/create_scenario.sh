#!/bin/bash

base_url="https://try-mec.etsi.org"
parameter=$1
sandbox=$2
cookie=$3
#cookie="_ga=GA1.1.1324525473.1657192309; _ga_L34WJL1P2Z=GS1.1.1661437689.8.0.1661437689.0.0.0; authCookie=MTY2MTkyNzYzNHxEdi1CQkFFQ180SUFBUkFCRUFBQU1mLUNBQUVHYzNSeWFXNW5EQVVBQTNOcFpBWnpkSEpwYm1jTUZnQVVZMk0zWm05b2FXOHdhMjF2Y1hNNGJ6WnlhbWM9fLQEC6dZlr8NGpP4h4wWZ-1uAnX7E3smGatFjtIV5dE4"


display_usage(){
	#Display Help
	echo 
	echo "This script creates the ETSI MEC Hackathon Scenario"
	echo
	echo "Usage:"
	echo "  create_scenario.sh <parameter> <sandbox> <cookie>"
	echo
	echo "Parameters:"
	echo " - all: It creates car UE and all subscriptions (location, rni)"
	echo " - car: It creates car UE"
	echo " - geodata: It retrieves the geodata information about the car UE"
	echo " - location: It creates the location usertracking subscription"
	echo " - rni: It creates all the rni subscriptions"
	echo " - v2x_green: It retrieves the predicted QoS from green coverage zone"
	echo " - v2x_purple: It retrieves the predicted QoS from green coverage zone"
	echo
}

create_car_ue(){
	
	echo "curl -X POST $url/sandbox-ctrl/v1/events/SCENARIO-UPDATE -d @car_ue_creation.json"
	echo
	curl -X POST $url/sandbox-ctrl/v1/events/SCENARIO-UPDATE \
	-H "accept: application/json" \
	-H "Content-Type: application/json" \
	-d "@car_ue_creation.json"
	echo
	echo "Car UE created"
}

create_location_subscriptions(){
	echo
	curl -X POST $url/mep1/location/v2/subscriptions/userTracking \
	-H "accept: application/json" \
	-H "Content-Type: application/json" \
	-d "@location/car_tracking_subscription.json"
	echo
	echo "UserTrackingSubscription created"
}

create_rni_subscriptions(){
	echo
	curl -X POST $url/mep1/rni/v2/subscriptions \
	-H "accept: application/json" \
	-H "Content-Type: application/json" \
	-d "@rni/measrepue_subscription.json"
	echo
	echo "MeasRepUeSubscription created"
	
	curl -X POST $url/mep1/rni/v2/subscriptions \
	-H "accept: application/json" \
	-H "Content-Type: application/json" \
	-d "@rni/nrmeasrepue_subscription.json"
	echo
	echo "NrMeasRepUeSubscription created"
}

get_geodata(){
	
	echo "curl -X GET $url/gis/v1/geodata?excludePath=true"
	echo "with Cookie: $cookie"
	echo
	curl -X GET $url/gis/v1/geodata?excludePath=true \
	-H "Accept: application/json" \
	-H "Content-Type: application/json" \
	-H "Cookie: $cookie" \
	-H "Host: try-mec.etsi.org" \
	-H "Referer: https://try-mec.etsi.org/" \
	-H "Sec-Fetch-Dest: empty" \
	-H "Sec-Fetch-Mode: cors" \
	-H "Sec-Fetch-Site: same-origin" \
	echo
}

v2x_green(){
	echo	
	curl -X POST $url/mep1/vis/v2/provide_predicted_qos \
	-H "accept: application/json" \
	-H "Content-Type: application/json" \
	-d "@v2x/predicted_qos_green.json"
	echo
}

v2x_purple(){
	echo	
	curl -X POST $url/mep1/vis/v2/provide_predicted_qos \
	-H "accept: application/json" \
	-H "Content-Type: application/json" \
	-d "@v2x/predicted_qos_purple.json"
	echo
}

if [ $# -eq 0 ]
	then
		display_usage
		exit 1
fi

if [ $parameter = "car" ];
	then
		url="$base_url/$sandbox"
		create_car_ue
		exit 0
fi

if [ $parameter = "location" ];
	then
		url="$base_url/$sandbox"
		create_location_subscriptions
		exit 0
fi

if [ $parameter = "rni" ];
	then
		url="$base_url/$sandbox"
		echo "Creating rni subscriptions..."
		create_rni_subscriptions
		exit 0
fi

if [ $parameter = "geodata" ];
	then		
		url="$base_url/$sandbox"		
		get_geodata		
		exit 0
fi

if [ $parameter = "v2x_green" ];
	then
		url="$base_url/$sandbox"		
		v2x_green		
		exit 0
fi

if [ $parameter = "v2x_purple" ];
	then
		url="$base_url/$sandbox"		
		v2x_purple
		exit 0
fi

if [ $parameter = "all" ];
	then
		url="$base_url/$sandbox"
		create_car_ue
		create_location_subscriptions
		create_rni_subscriptions
		exit 0
fi

