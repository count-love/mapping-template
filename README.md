# mapping-template
A simple HTML/CSS/JS template to prototype location data explorations.

# Installation and usage
1. Copy the contents of this repository to a directory.
2. Open `index.html` in a browser; if everything is set up correctly, you should see a map of Boston with two bus stops marked.
3. Modify `data.json` with your own data. The data file is an array of points to draw on the map. You need to define a "lat" and "lon" for each point, and you can optionally also define a "description" field to show on mouseover.
4. Reload `index.html`, and the map will show your new locations.