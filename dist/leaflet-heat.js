<!DOCTYPE html>
<head>
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.4.0/dist/leaflet.css"
  crossorigin=""/>  
  <script src="https://unpkg.com/leaflet@1.4.0/dist/leaflet.js"
  crossorigin=""></script>
  <style>
      #mapDIV{
          height: 700px;
          width: 700px;
          border: solid 1px black;
      }
</style>
</head>
<body>
    <div id='mapDIV'>i</div>
</body>
</html>
<script>
      var map = L.map(document.getElementById('mapDIV'), {
      center: [-20.1438, -44.1301],
      zoom: 15
      });
      var basemap = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          });
          basemap.addTo(map);
</script>
