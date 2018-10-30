// Visualizing Stuff in Maps: https://developers.google.com/maps/documentation/javascript/earthquakes

// -Add Custom Legend for Incident Types



firebase.initializeApp({
    apiKey: 'AIzaSyB2Cr_PGN8dKQmj9_om6z-Ikn_AWEFp_gE',
    authDomain: 'heatmap-f5281.firebaseapp.com',
    projectId: 'heatmap-f5281'
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Disable deprecated features
db.settings({
    timestampsInSnapshots: true
});


var jsonObject;
var map;

//Get JSON Data, then add to map.data
db.collection("features").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        console.log(doc.data());
        jsonObject = doc.data();
        console.log(jsonObject);
        map.data.addGeoJson(jsonObject); 
    });
});


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: { lat: 51.3397, lng: 12.3731 },
        mapTypeId: 'terrain'
    });

    map.data.setStyle(function (feature) {
        var magnitude = feature.getProperty('skala');
        return {
            icon: getCircle(magnitude)
        };
    });
}

function getCircle(magnitude) {
    return {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: 'red',
        fillOpacity: .2,
        scale: Math.pow(2, magnitude) / 2,
        strokeColor: 'white',
        strokeWeight: .5
    };
}

function eqfeed_callback(results) {
    map.data.addGeoJson(results);
}








//Realtime Updates https://firebase.google.com/docs/firestore/query-data/listen
// db.collection("users").doc("SF")
//     .onSnapshot(function(doc) {
//         console.log("Current data: ", doc.data());
//         console.log(doc.data());
//     });



// Add Stuff to DB

// db.collection("features").add({
//     "type": "FeatureCollection",
//     "features": [
//         {
//             "type": "Feature",
//             "properties": {
//                 "skala": 6,
//                 "category": "Awesomeness",
//                 "place": "Dresdner Straße 26 04317 Leipzig",
//                 "time": 1348174056,
//                 "url": "http://google.com",
//                 "status": "aktuell",
//                 "sources": "twitter"
//             },
//             "geometry": {
//                 "type": "Point",
//                 "coordinates": [
//                     12.389230728149414,
//                     51.33372202647613
//                 ]
//             }
//         },
//         {
//             "type": "Feature",
//             "properties": {
//                 "skala": 6,
//                 "category": "Awesomeness",
//                 "place": "Dresdner Straße 26 04317 Leipzig",
//                 "time": 1348174056,
//                 "url": "http://google.com",
//                 "status": "aktuell",
//                 "sources": "twitter"
//             },
//             "geometry": {
//                 "type": "Point",
//                 "coordinates": [
//                     12.397384643554688,
//                     51.34605424944661
//                 ]
//             }
//         },
//         {
//             "type": "Feature",
//             "properties": {
//                 "skala": 6,
//                 "category": "Awesomeness",
//                 "place": "Dresdner Straße 26 04317 Leipzig",
//                 "time": 1348174056,
//                 "url": "http://google.com",
//                 "status": "aktuell",
//                 "sources": "twitter"
//             },
//             "geometry": {
//                 "type": "Point",
//                 "coordinates": [
//                     12.392749786376951,
//                     51.33870893358745
//                 ]
//             }
//         },
//         {
//             "type": "Feature",
//             "properties": {
//                 "skala": 6,
//                 "category": "Awesomeness",
//                 "place": "Dresdner Straße 26 04317 Leipzig",
//                 "time": 1348174056,
//                 "url": "http://google.com",
//                 "status": "aktuell",
//                 "sources": "twitter"
//             },
//             "geometry": {
//                 "type": "Point",
//                 "coordinates": [
//                     12.398242950439453,
//                     51.34315915601202
//                 ]
//             }
//         }
//     ]
// })
// .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//     console.error("Error adding document: ", error);
// });