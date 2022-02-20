<?php
  include_once('../ubr/db.php');

  $query = $conn->prepare("SELECT * FROM unisex");
  $query->execute();
  $result = $query->get_result(); 
  $numrows = mysqli_num_rows($result);
  
  $brarray = array();
while ($row = $result->fetch_row()) {
	$brarray[] = $row;
}

$jsbrarray = json_encode($brarray);
  mysqli_close($conn);
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset='utf-8' />
  <title>UniFind</title>
  <link rel="stylesheet" type="text/css" href="./style.css" />
  <script> brarray = JSON.parse('<?php echo json_encode($brarray); ?>'); </script>
</head>

<body>
  <!--topnav-->
  <div class="topnav">
    <a class="active" href="home.html">Home</a>
    <a href="index.php">Map</a>
    <a href="list.html">Table</a>
  </div>
  <script src='../ubr/scripttest.js'></script>
  <h2>Map Scope</h2>
  <!--The div element for the map -->
  <div id="map"></div>

  <!-- Async script executes immediately and must be after any DOM elements used in callback. -->
  <script
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC_yKhQXoonAcN2z5QumTPNOwE5LlYSxlY&callback=initMap&libraries=&v=weekly"
    async></script>
</body>
</html>