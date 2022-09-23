// Ejemplo de live!!!
    //https://maplibre.org/maplibre-gl-js-docs/example/live-geojson/

    const center = [7.425342, 43.738543]

    var map = new maplibregl.Map({
        container: 'map',
        style: 'https://api.maptiler.com/maps/positron/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
        zoom: 14,
        center: center
    });        

    var zone1_4g_geojson = {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [7.419344, 43.72764]
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        "coordinates": [7.413819, 43.729538]
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        "coordinates": [7.416715, 43.733616]
                    }
                }
            ]
        }
    };

    var zone1_5g_geojson = {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        "coordinates": [7.415385, 43.730846]
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        "coordinates": [7.416962, 43.731453]
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        "coordinates": [7.417023, 43.733227]
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        "coordinates": [7.417173, 43.72764]
                    }
                }

            ]
        }
    };

    var zone2_4g_geojson = {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        "coordinates": [7.423547, 43.731724]
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        "coordinates": [7.429257, 43.73411]
                    }
                }                            
            ]
        }
    };

    var zone2_5g_geojson = {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        "coordinates": [7.420653, 43.731743]
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        "coordinates": [7.421865, 43.733368]
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        "coordinates": [7.42509, 43.73189]
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        "coordinates": [7.42704, 43.732407]
                    }
                }                            
            ]
        }
    };

    /*var zone3_4g_geojson = {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        "coordinates": [7.421007, 43.737087]
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        "coordinates": [7.425841, 43.739426]
                    }
                }                            
            ]
        }
    };*/

    var zone3_sensor = {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                /*{
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        "coordinates": [7.417394, 43.735794]
                    }
                },*/
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        "coordinates": [7.426598, 43.73844]
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        "coordinates": [7.42738, 43.739075]
                    }
                }                            
            ]
        }
    };

    var zone3_mmtc = {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature', //mmtc
                    'geometry': {
                        'type': 'Point',
                        "coordinates": [7.428264, 43.73876]
                    }
                }
            ]
        }
    };

    var zone4_4g_geojson = {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        "coordinates": [7.429504, 43.74301]
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        "coordinates": [7.432551, 43.746544]
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        "coordinates": [7.437573, 43.748993]
                    }
                }                            
            ]
        }
    };

    var zone4_5g_geojson = {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        "coordinates": [7.431907,43.74543]
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        "coordinates": [7.431824,43.74787]
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        "coordinates": [7.433529,43.74865]
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        "coordinates": [7.434421,43.749107]
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        "coordinates": [7.437487,43.7487]
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        "coordinates": [7.438839,43.749706]
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        "coordinates": [7.4371,43.750282]
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        "coordinates": [7.436006,43.749382]
                    }
                }                            
            ]
        }
    };

    var car_route = {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'geometry': {
                'type': 'LineString',
                "coordinates": [
                    [7.429890, 43.741079], 
					[7.429782, 43.739698], 
					[7.429052, 43.738628], 
					[7.427936, 43.737946], 
					[7.426262, 43.737465], 
					[7.422548, 43.737651], 
					[7.420874, 43.737171], 
					[7.418320, 43.735108], 
					[7.417933, 43.734100], 
					[7.417354, 43.732983], 
					[7.418942, 43.732533], 
					[7.418534, 43.734239], 
					[7.421196, 43.736783], 
					[7.426863, 43.737434], 
					[7.429138, 43.738256], 
					[7.429975, 43.739078], 
					[7.430362, 43.740598], 
					[7.430319, 43.741715], 
					[7.429825, 43.741808],
					[7.429890, 43.741079]
                ]
            }
        }
    };

    var circle_options = {
        steps: 64,
        units: 'kilometers'
      };

    map.on('load', function () {        

        // zone 1 - 4G
        
        // adding markers
        zone1_4g_geojson.data.features.forEach(function (marker) {
           
            var coverageMarkerPurple = document.createElement('div');
            coverageMarkerPurple.classList.add('marker-parent');
            
            var pinIconPurple = document.createElement('div');
            pinIconPurple.classList.add("marker-pin");
            //https://codepen.io/sosuke/pen/Pjoqqp
            pinIconPurple.style.cssText='filter: invert(14%) sepia(76%) saturate(3606%) hue-rotate(266deg) brightness(107%) contrast(107%);';

            var circle=document.createElement('div');
            circle.classList.add('circle');

            var barsLogo=document.createElement('div');
            barsLogo.classList.add('bars');

            var markerText=document.createElement('div');
            markerText.classList.add('marker-text');
            markerText.innerHTML='4G';

            coverageMarkerPurple.appendChild(pinIconPurple);
            coverageMarkerPurple.appendChild(circle);
            coverageMarkerPurple.appendChild(barsLogo);
            coverageMarkerPurple.appendChild(markerText);
           
            new maplibregl.Marker(coverageMarkerPurple)
                .setLngLat(marker.geometry.coordinates)
                .addTo(map);
        });

        //adding coverage circles
        zone1_4g_geojson.data.features.forEach(function (feature){
            var circlePurple = turf.circle(feature.geometry.coordinates, 0.4, circle_options);

            map.addLayer({
                id: "zone1-4g-"+feature.geometry.coordinates[0].toString(),
                type: "fill",
                source: {
                  type: "geojson",
                  data: circlePurple
                },
                paint: {
                  "fill-color": "#701ac0",
                  "fill-opacity": 0.15,
                }
              });
        });
        
        // zone 1 - 5G

        // adding markers
        zone1_5g_geojson.data.features.forEach(function (marker) {
           
            var coverageMarkerPurple = document.createElement('div');
            coverageMarkerPurple.classList.add('marker-parent');
            
            var pinIconPurple = document.createElement('div');
            pinIconPurple.classList.add("marker-pin");
            //https://codepen.io/sosuke/pen/Pjoqqp
            pinIconPurple.style.cssText='filter: invert(14%) sepia(76%) saturate(3606%) hue-rotate(266deg) brightness(107%) contrast(107%);';

            var circle=document.createElement('div');
            circle.classList.add('circle');

            var barsLogo=document.createElement('div');
            barsLogo.classList.add('bars');

            var markerText=document.createElement('div');
            markerText.classList.add('marker-text');
            markerText.innerHTML='5G';

            coverageMarkerPurple.appendChild(pinIconPurple);
            coverageMarkerPurple.appendChild(circle);
            coverageMarkerPurple.appendChild(barsLogo);
            coverageMarkerPurple.appendChild(markerText);
           
            new maplibregl.Marker(coverageMarkerPurple)
                .setLngLat(marker.geometry.coordinates)
                .addTo(map);
        });

        //adding coverage circles
        zone1_5g_geojson.data.features.forEach(function (feature){
            var circlePurple = turf.circle(feature.geometry.coordinates, 0.1, circle_options);

            map.addLayer({
                id: "zone1-5g-"+feature.geometry.coordinates[0].toString(),
                type: "fill",
                source: {
                  type: "geojson",
                  data: circlePurple
                },
                paint: {
                  "fill-color": "#701ac0",
                  "fill-opacity": 0.15,
                }
              });
        });

        // zone 2 - 4G

        //adding markers
        zone2_4g_geojson.data.features.forEach(function (marker) {
           
            var coverageMarkerRed = document.createElement('div');
            coverageMarkerRed.classList.add('marker-parent');
            
            var pinIconRed = document.createElement('div');
            pinIconRed.classList.add("marker-pin");
            //https://codepen.io/sosuke/pen/Pjoqqp
            pinIconRed.style.cssText='filter: invert(9%) sepia(56%) saturate(7492%) hue-rotate(358deg) brightness(91%) contrast(110%);';

            var circle=document.createElement('div');
            circle.classList.add('circle');

            var barsLogo=document.createElement('div');
            barsLogo.classList.add('bars');

            var markerText=document.createElement('div');
            markerText.classList.add('marker-text');
            markerText.innerHTML='4G';

            coverageMarkerRed.appendChild(pinIconRed);
            coverageMarkerRed.appendChild(circle);
            coverageMarkerRed.appendChild(barsLogo);
            coverageMarkerRed.appendChild(markerText);
           
            new maplibregl.Marker(coverageMarkerRed)
                .setLngLat(marker.geometry.coordinates)
                .addTo(map);
        });

        //adding coverage circles
        zone2_4g_geojson.data.features.forEach(function (feature){
            var circlePurple = turf.circle(feature.geometry.coordinates, 0.4, circle_options);

            map.addLayer({
                id: "zone2-4g-"+feature.geometry.coordinates[0].toString(),
                type: "fill",
                source: {
                  type: "geojson",
                  data: circlePurple
                },
                paint: {
                  "fill-color": "#580000",
                  "fill-opacity": 0.15,
                }
              });
        });

        // zone 2 - 5G

        //adding markers
        zone2_5g_geojson.data.features.forEach(function (marker) {
           
            var coverageMarkerRed = document.createElement('div');
            coverageMarkerRed.classList.add('marker-parent');
            
            var pinIconRed = document.createElement('div');
            pinIconRed.classList.add("marker-pin");
            //https://codepen.io/sosuke/pen/Pjoqqp
            pinIconRed.style.cssText='filter: invert(9%) sepia(56%) saturate(7492%) hue-rotate(358deg) brightness(91%) contrast(110%);';

            var circle=document.createElement('div');
            circle.classList.add('circle');

            var barsLogo=document.createElement('div');
            barsLogo.classList.add('bars');

            var markerText=document.createElement('div');
            markerText.classList.add('marker-text');
            markerText.innerHTML='5G';

            coverageMarkerRed.appendChild(pinIconRed);
            coverageMarkerRed.appendChild(circle);
            coverageMarkerRed.appendChild(barsLogo);
            coverageMarkerRed.appendChild(markerText);
           
            new maplibregl.Marker(coverageMarkerRed)
                .setLngLat(marker.geometry.coordinates)
                .addTo(map);
        });

        //adding coverage circles
        zone2_5g_geojson.data.features.forEach(function (feature){
            var circlePurple = turf.circle(feature.geometry.coordinates, 0.1, circle_options);

            map.addLayer({
                id: "zone2-4g-"+feature.geometry.coordinates[0].toString(),
                type: "fill",
                source: {
                  type: "geojson",
                  data: circlePurple
                },
                paint: {
                  "fill-color": "#580000",
                  "fill-opacity": 0.15,
                }
              });
        });

        // zone 3 - 4G

        //adding markers
        /*zone3_4g_geojson.data.features.forEach(function (marker) {
           
            var coverageMarkerOrange = document.createElement('div');
            coverageMarkerOrange.classList.add('marker-icon-parent');
            
            var pinIconOrange = document.createElement('div');
            pinIconOrange.classList.add("custom-marker-pin");
            //https://codepen.io/sosuke/pen/Pjoqqp
            pinIconOrange.style.cssText='filter: invert(63%) sepia(76%) saturate(3419%) hue-rotate(359deg) brightness(103%) contrast(107%);';

            var circle=document.createElement('div');
            circle.classList.add('circle');

            var barsLogo=document.createElement('div');
            barsLogo.classList.add('ion-connection-bars');

            var markerText=document.createElement('div');
            markerText.classList.add('custom-marker-icon-text');
            markerText.innerHTML='4G';

            coverageMarkerOrange.appendChild(pinIconOrange);
            coverageMarkerOrange.appendChild(circle);
            coverageMarkerOrange.appendChild(barsLogo);
            coverageMarkerOrange.appendChild(markerText);
           
            new maplibregl.Marker(coverageMarkerOrange)
                .setLngLat(marker.geometry.coordinates)
                .addTo(map);
        });

        //adding coverage circles
        zone3_4g_geojson.data.features.forEach(function (feature){
            var circlePurple = turf.circle(feature.geometry.coordinates, 0.4, circle_options);

            map.addLayer({
                id: "zone2-4g-"+feature.geometry.coordinates[0].toString(),
                type: "fill",
                source: {
                  type: "geojson",
                  data: circlePurple
                },
                paint: {
                  "fill-color": "#cc7000",
                  "fill-opacity": 0.15,
                }
              });
        });*/

        // zone 3 - 5G

        //adding sensor markers
        zone3_sensor.data.features.forEach(function (marker) {
           
            var coverageMarkerOrange = document.createElement('div');
            coverageMarkerOrange.classList.add('marker-parent');
            
            var pinIconOrange = document.createElement('div');
            pinIconOrange.classList.add("marker-pin");
            //https://codepen.io/sosuke/pen/Pjoqqp
            pinIconOrange.style.cssText='filter: invert(63%) sepia(76%) saturate(3419%) hue-rotate(359deg) brightness(103%) contrast(107%);';

            var circle=document.createElement('div');
            circle.classList.add('circle');

            var camLogo=document.createElement('div');
            camLogo.classList.add('videocam');
            
            coverageMarkerOrange.appendChild(pinIconOrange);
            coverageMarkerOrange.appendChild(circle);
            coverageMarkerOrange.appendChild(camLogo);
           
            new maplibregl.Marker(coverageMarkerOrange)
                .setLngLat(marker.geometry.coordinates)
                .addTo(map);
        });

        //adding mmtc markers
        zone3_mmtc.data.features.forEach(function (marker) {
       
            var coverageMarkerOrange = document.createElement('div');
            coverageMarkerOrange.classList.add('marker-parent');
                    
            var pinIconOrange = document.createElement('div');
            pinIconOrange.classList.add("marker-pin");
            //https://codepen.io/sosuke/pen/Pjoqqp
            pinIconOrange.style.cssText='filter: invert(63%) sepia(76%) saturate(3419%) hue-rotate(359deg) brightness(103%) contrast(107%);';
        
            var circle=document.createElement('div');
            circle.classList.add('circle');
        
            var markerText=document.createElement('div');
            markerText.classList.add('marker-centered-text');
            markerText.innerHTML='MMTC';

            coverageMarkerOrange.appendChild(pinIconOrange);
            coverageMarkerOrange.appendChild(circle);
            coverageMarkerOrange.appendChild(markerText);
                   
            new maplibregl.Marker(coverageMarkerOrange)
                .setLngLat(marker.geometry.coordinates)
                .addTo(map);
        });

         //adding coverage circles
         zone3_mmtc.data.features.forEach(function (feature){
            var circlePurple = turf.circle(feature.geometry.coordinates, 0.1, circle_options);

            map.addLayer({
                id: "zone2-4g-"+feature.geometry.coordinates[0].toString(),
                type: "fill",
                source: {
                  type: "geojson",
                  data: circlePurple
                },
                paint: {
                  "fill-color": "#cc7000",
                  "fill-opacity": 0.15,
                }
              });
        });

         // zone 4 - 4G

         //adding markers
        zone4_4g_geojson.data.features.forEach(function (marker) {
           
            var coverageMarkerGreen = document.createElement('div');
            coverageMarkerGreen.classList.add('marker-parent');
            
            var pinIconGreen = document.createElement('div');
            pinIconGreen.classList.add("marker-pin");
            //https://codepen.io/sosuke/pen/Pjoqqp
            pinIconGreen.style.cssText='filter: invert(58%) sepia(100%) saturate(413%) hue-rotate(70deg) brightness(94%) contrast(89%);';

            var circle=document.createElement('div');
            circle.classList.add('circle');

            var barsLogo=document.createElement('div');
            barsLogo.classList.add('bars');

            var markerText=document.createElement('div');
            markerText.classList.add('marker-text');
            markerText.innerHTML='4G';

            coverageMarkerGreen.appendChild(pinIconGreen);
            coverageMarkerGreen.appendChild(circle);
            coverageMarkerGreen.appendChild(barsLogo);
            coverageMarkerGreen.appendChild(markerText);
           
            new maplibregl.Marker(coverageMarkerGreen)
                .setLngLat(marker.geometry.coordinates)
                .addTo(map);
        });

          //adding coverage circles
        zone4_4g_geojson.data.features.forEach(function (feature){
            var circlePurple = turf.circle(feature.geometry.coordinates, 0.4, circle_options);

            map.addLayer({
                id: "zone2-4g-"+feature.geometry.coordinates[0].toString(),
                type: "fill",
                source: {
                  type: "geojson",
                  data: circlePurple
                },
                paint: {
                  "fill-color": "#28a428",
                  "fill-opacity": 0.15,
                }
              });
        });

        // zone 4 - 5G

        //adding markers
        zone4_5g_geojson.data.features.forEach(function (marker) {
           
            var coverageMarkerGreen = document.createElement('div');
            coverageMarkerGreen.classList.add('marker-parent');
            
            var pinIconGreen = document.createElement('div');
            pinIconGreen.classList.add("marker-pin");
            //https://codepen.io/sosuke/pen/Pjoqqp
            pinIconGreen.style.cssText='filter: invert(58%) sepia(100%) saturate(413%) hue-rotate(70deg) brightness(94%) contrast(89%);';

            var circle=document.createElement('div');
            circle.classList.add('circle');

            var barsLogo=document.createElement('div');
            barsLogo.classList.add('bars');

            var markerText=document.createElement('div');
            markerText.classList.add('marker-text');
            markerText.innerHTML='5G';

            coverageMarkerGreen.appendChild(pinIconGreen);
            coverageMarkerGreen.appendChild(circle);
            coverageMarkerGreen.appendChild(barsLogo);
            coverageMarkerGreen.appendChild(markerText);
           
            new maplibregl.Marker(coverageMarkerGreen)
                .setLngLat(marker.geometry.coordinates)
                .addTo(map);
        });


        //adding coverage circles
        zone4_5g_geojson.data.features.forEach(function (feature){
        var circlePurple = turf.circle(feature.geometry.coordinates, 0.1, circle_options);

        map.addLayer({
            id: "zone2-4g-"+feature.geometry.coordinates[0].toString(),
            type: "fill",
                source: {
                  type: "geojson",
                  data: circlePurple
                },
                paint: {
                  "fill-color": "#28a428",
                  "fill-opacity": 0.15,
                }
            });
        });
        
        // mep
        var mepMarker = document.createElement('div');
        mepMarker.classList.add('marker-parent');
            
        var pinIconBlue = document.createElement('div');
        pinIconBlue.classList.add("marker-pin");
        //https://codepen.io/sosuke/pen/Pjoqqp
        pinIconBlue.style.cssText='filter: invert(28%) sepia(98%) saturate(7500%) hue-rotate(226deg) brightness(102%) contrast(92%);';

        var circle=document.createElement('div');
        circle.classList.add('circle');

        var cloudLogo=document.createElement('div');
        cloudLogo.classList.add('cloud');

        mepMarker.appendChild(pinIconBlue);
        mepMarker.appendChild(circle);
        mepMarker.appendChild(cloudLogo);
           
        new maplibregl.Marker(mepMarker)
            .setLngLat([7.421096,43.73408])
            .addTo(map);


        // car route

        map.addSource('route', car_route);

        map.addLayer({
            id: "car-route",
            type: "line",
            source: "route",
            layout: {
                "line-join": "round",
                "line-cap": "round"                
            },
            paint: {
                "line-color": "#008fb3",
                "line-width": 3,
                "line-opacity": 0.5
            }          
        });

        // moving car
        var carMarker = document.createElement('div');
        carMarker.classList.add('marker-parent');
            
        var pinIconBlueSky = document.createElement('div');
        pinIconBlueSky.classList.add("marker-pin");
        //https://codepen.io/sosuke/pen/Pjoqqp
        pinIconBlueSky.style.cssText='filter: invert(63%) sepia(66%) saturate(2884%) hue-rotate(153deg) brightness(102%) contrast(105%);';

        var circle=document.createElement('div');
        circle.classList.add('circle');

        var carLogo=document.createElement('div');
        carLogo.classList.add('car');

        carMarker.appendChild(pinIconBlueSky);
        carMarker.appendChild(circle);
        carMarker.appendChild(carLogo);
           
        car = new maplibregl.Marker(carMarker)
            .setLngLat([7.427465, 43.737813])
            .addTo(map);


        var socket = io();

        socket.on('car_location', function (coordinates) {                            
            //console.info("["+coordinates[0]+", "+coordinates[1]+"]")
            car.setLngLat([coordinates[0], coordinates[1]]);
            
        });
    });
        
    map.addControl(new maplibregl.NavigationControl());