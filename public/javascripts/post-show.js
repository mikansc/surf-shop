mapboxgl.accessToken =
  "pk.eyJ1IjoibWljaGFlbG5zYyIsImEiOiJjazZhbTVhbngwczZkM2tvYmcwbXh0Ymg3In0.u3DHnRFp80yQGB_hX9Vcdw";

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v10",
  center: post.coordinates,
  zoom: 8
});

// create a HTML element for our post location/marker
var el = document.createElement("div");
el.className = "marker";

// make a marker for our location and add to the map
new mapboxgl.Marker(el)
  .setLngLat(post.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }) // add popups
      .setHTML("<h3>" + post.title + "</h3><p>" + post.location + "</p>")
  )
  .addTo(map);

// code from the next step will go here!
console.log(post);

// toggle edit review form

let toggleEdit = document.querySelectorAll(".toggle-edit-form");
for (let i = 0; i < toggleEdit.length; i++) {
  toggleEdit[i].addEventListener("click", function() {
    // Toggle the edit button text on click
    this.textContent === "Edit"
      ? (this.textContent = "Cancel")
      : (this.textContent = "Edit");
    // toggle visibility of the edit review form
    let editForm = this.nextElementSibling;
    editForm.style.display !== "block"
      ? (editForm.style.display = "block")
      : (editForm.style.display = "none");
  });
}
