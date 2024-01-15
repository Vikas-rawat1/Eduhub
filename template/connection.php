 <?php $servername = "localhost";
$username = "root";
$password = "";
$dbname = "eduhub";


$conn = mysqli_connect($servername, $username, $password, $dbname);

if ($conn) {
  // echo "success";
} else {
  echo "fail" . mysqli_connect_error();
}
if ($_POST['btn']) {
  $username = $_POST['name'];
  $password = $_POST['pass'];
  $confirmpass = $_POST['confirm'];
  $data_store = "INSERT INTO registration_details VALUES('$username','$password','$confirmpass')";

  $data = mysqli_query($conn, $data_store);

  if ($data) {
    // echo "successfully insert";
    header("location:../template/explore-course.html");
  } else {
    echo "sorry" . mysqli_connect_error();
  }
}
?>