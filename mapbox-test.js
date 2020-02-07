require('dotenv').config();

const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding')
const geocodingClient = mbxGeocoding({
    accessToken: "pk.eyJ1IjoibWljaGFlbG5zYyIsImEiOiJjazZhbTVhbngwczZkM2tvYmcwbXh0Ymg3In0.u3DHnRFp80yQGB_hX9Vcdw"
});

async function geocoder(location) {
    try {
        let response = await geocodingClient.forwardGeocode({
                query: location,
                limit: 1,
            })
            .send();

        console.log(response.body.features[0].geometry.coordinates)
    } catch (err) {
        console.log(err.message)
    }

}

geocoder('Joinville, BR')


// .then(response => {
//     const match = response.body;
//     console.log(match.features[0].geometry.coordinates)
// });