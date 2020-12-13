<?php 
$uname=$_POST['uname'];
$pwd=$_POST['pwd'];

if(isset($_POST['submit'])) {
	if(!empty($uname) && !empty($pwd)) {
		if($uname=='Tom' && $pwd=='tomlei97') {
			echo "Welcome to the page";
		} else {
			echo "Please enter correct username or password";
		}
	} else {
		echo "Please enter required fields";
	}
}
?>