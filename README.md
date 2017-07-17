# mapping-template
A simple HTML/CSS/JS template to prototype location data explorations.

# Installation and usage
1. Copy the contents of this repository to a directory.
2. Add the following subdirectories and dependencies (you'll need to unzip the Leaflet and Bootstrap downloads):
    - [`external/jQuery/2.1.1`](https://code.jquery.com/jquery-2.2.1.min.js)
    - [`external/Leaflet/1.1.0`](http://cdn.leafletjs.com/leaflet/v1.1.0/leaflet.zip)
    - [`external/Bootstrap/3.3.7`](https://github.com/twbs/bootstrap/releases/download/v3.3.7/bootstrap-3.3.7-dist.zip)
3. Open `index.html` in a browser; if everything is set up correctly, you should see a map of Boston with two bus stops marked.
4. Modify `data.json` with your own data. The data file is an array of points to draw on the map. You need to define a "lat" and "lon" for each point, and you can optionally also define a "description" field to show on mouseover.
5. Reload `index.html`, and the map will show your new locations.