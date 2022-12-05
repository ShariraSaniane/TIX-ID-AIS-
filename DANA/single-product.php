<?php
if (session_id() == '' || !isset($_SESSION)) {
  session_start();
}

include("connection.php");

$id_barang = $_GET['id_barang'];
$sql = "SELECT * FROM barang WHERE id_barang = '$id_barang'";
$result = $conn->query($sql);
$product = mysqli_fetch_assoc($result);

$nama_barang = $product['nama_barang'];
$gambar = $product['gambar'];
$harga = number_format($product['harga']);
?>

<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
  <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700" rel="stylesheet">

  <title>E-SHOP - Product Detail</title>

  <!-- Bootstrap core CSS -->
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Favicon  -->
  <link rel="icon" href="images/favicon.ico">

  <!-- Additional CSS Files -->
  <link rel="stylesheet" href="assets/css/fontawesome.css">
  <link rel="stylesheet" href="assets/css/tooplate-main.css">
  <link rel="stylesheet" href="assets/css/owl.css">
  <link rel="stylesheet" href="assets/css/flex-slider.css">
  <!--
Tooplate 2114 Pixie
https://www.tooplate.com/view/2114-pixie
-->
</head>

<body>

  <!-- Pre Header -->
  <div id="pre-header">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <span>Belanja mudah dan menyenangkan dengan E-Shop</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
    <div class="container">
      <a class="navbar-brand" href="#"><img src="assets/images/image2.png" alt=""></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="home.php">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="profile.html">Profile</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="topup.html">Top_Up</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="transfer.html">Transfer</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="history.html">History</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="index.html">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Page Content -->
  <!-- Single Starts Here -->
  <div class="single-product">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-heading">
            <div class="line-dec"></div>
            <h1>Product</h1>
          </div>
        </div>
        <div class="col-md-6">
          <div class="product-slider">
            <img src="<?= $gambar; ?>">
          </div>
        </div>


        <div class="col-md-6">
          <div class="right-content">
            <div class="product-desc">
              <?php
              $id_barang = $_GET['id_barang'];
              $sql = "SELECT * FROM barang WHERE id_barang = '$id_barang'";
              $result = $conn->query($sql);
              while ($product = mysqli_fetch_assoc($result)) {

                echo '<h4>' . $product['nama_barang'] . '</h4>';
                echo '<h6>Rp' . $product['harga'] . '</h6>';
                echo '<p>' . $product['deskripsi'] . '</p>';
              }
              ?>
            </div>
            <form action="checkout.php?action=add&id_barang=<?= $id_barang ?>" method="post">
              <label for="quantity">Quantity:</label>
              <input name="quantity" type="quantity" class="quantity-text" id="quantity" onfocus="if(this.value == '1') { this.value = ''; }" onBlur="if(this.value == '') { this.value = '1';}" value="1">
              <input type="submit" class="button" name="action" value="Buy!">

            </form>
            <div class="down-content">
              <div class="categories">
                <h6>Category: <span><a href="#">Pets</a></span></h6>
              </div>
              <div class="share">
                <h6>Share: <span><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-linkedin"></i></a><a href="#"><i class="fa fa-twitter"></i></a></span></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Single Page Ends Here -->


  <!-- Bootstrap core JavaScript -->
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>


  <!-- Additional Scripts -->
  <script src="assets/js/custom.js"></script>
  <script src="assets/js/owl.js"></script>
  <script src="assets/js/isotope.js"></script>
  <script src="assets/js/flex-slider.js"></script>


  <script language="text/Javascript">
    cleared[0] = cleared[1] = cleared[2] = 0; //set a cleared flag for each field
    function clearField(t) { //declaring the array outside of the
      if (!cleared[t.id]) { // function makes it static and global
        cleared[t.id] = 1; // you could use true and false, but that's more typing
        t.value = ''; // with more chance of typos
        t.style.color = '#fff';
      }
    }
  </script>


</body>

</html>