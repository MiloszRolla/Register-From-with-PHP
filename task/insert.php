<?php
include_once 'db.php';
if(isset($_POST['submit']))
{    
     $first_name = $_POST['first_name'];
     $last_name = $_POST['last_name'];
     $email = $_POST['email'];
     $password = $_POST['password'];
     $sql = "INSERT INTO users (first_name, email, last_name, password)
     VALUES ('$first_name','$email','$last_name', '$password')";
     if (mysqli_query($conn, $sql)) {
        echo "New record has been added successfully !";
     } else {
        echo "Error: " . $sql . ":-" . mysqli_error($conn);
     }
     mysqli_close($conn);
}
?>
<!-- 
	// include config file
	require_once 'config.php';

	//a PHP Super Global variable which used to collect data after submitting it from the form
	$request = $_REQUEST;
	//get email address value
	$email = $request['email']; 
	//get first name value
	$first_name = $request['first_name'];
	//get last name value 
	$last_name = $request['last_name'];
	//get address value
	$address = $request['address'];

	// Defined $result as array
	$result = [];
	
	if(!isEmailValid($email)):
		$result['has_error'] = 1;
		$result['response'] = "Email address is invalid.";
	elseif(isEmailExists($db, "employees", $email)):
		$result['has_error'] = 1;
		$result['response'] = "Email address is already exists.";
	endif;

	// Check if no errors
	if(!count($result)):
		// SQL Statement
		$sql = "INSERT INTO employees (email, first_name, last_name, address)
		VALUES ('".$email."', '".$first_name."', '".$last_name."', '".$address."')";

		// Process the query
		if ($db->query($sql)) {
		  $result['response'] = "Employee has been created.";
		} else {
		  $result['response'] = "Error: " . $sql . "<br>" . $db->error;
		}

		// Close the connection after using it
		$db->close();
	endif;

	// Encode array into json format
	echo json_encode($result); -->
