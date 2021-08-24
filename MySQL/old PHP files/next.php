<?php

// Purpose: 
// This file takes a user's input from example.php, adds it as parameters
// to a query string, passes the query to MySQL, and formats the result set
// as an HTML table.
//
// Author: Rick Kazman


  // Connect to the server and the database
  $server = "localhost";
  $user="root";
  $password="";
  $database="TestTravel";

  $link = mysqli_connect($server, $user, $password, $database) ;

  if (!$link) {
    echo "Error: Unable to connect to MySQL." . PHP_EOL;
    echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
    echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
    exit;
  }
  
  // Retrieve the min and max from the POST array
  $min = $_POST['Min_Price'];
  $max = $_POST['Max_Price'];

  // Now run the query with the user's parameters
  $query = "Select * from room where price > $min and price < $max";

  // Grab the result from the query and format it in a table
  $result = mysqli_query($link, $query);  
  $resultstring = '<table border="3" cellpadding="5" cellspacing="5">';
  $resultstring .= '<td><B>Room#</td><td><B>Hotel#</td><td><B>Type</td><td><B>Price</td></b>';
  
  while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
  {
    $resultstring .= "<tr><td>" . $row['roomNo'] . "</td>";
    $resultstring .= "<td>" . $row['hotelNo'] . "</td> ";
    $resultstring .= "<td>" . $row['type'] . "</td>";
    $resultstring .= "<td>$" . $row['price'] . "</td></tr>";
  }

  $resultstring .= "</table>";
  
  echo $resultstring;

//  mysqli_close();
//  echo "<BR>Closed the DB";

?>

<Form Action="example.php" method="POST">
<input type="submit" value="Another Query?">
</Form>

