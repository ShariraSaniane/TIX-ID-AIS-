<?php
if (session_id() == '' || !isset($_SESSION)) {
  session_start();
}
?>

<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
  <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700" rel="stylesheet">

  <title>E-SHOP - Ecommerce Platform</title>

  <!-- Bootstrap core CSS -->
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Favicon  -->
  <link rel="icon" href="images/favicon.ico">

  <!-- Additional CSS Files -->
  <link rel="stylesheet" href="assets/css/fontawesome.css">
  <link rel="stylesheet" href="assets/css/tooplate-main.css">
  <link rel="stylesheet" href="assets/css/owl.css">
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
          <li class="nav-item active">
            <a class="nav-link" href="home.php">Home
              <span class="sr-only">(current)</span>
            </a>
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
            <a class="nav-link" href="index.html">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Page Content -->
  <!-- Banner Starts Here -->
  <div class="banner">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="caption">
            <h2>E-SHOP</h2>
            <div class="line-dec"></div>
            <p><strong>E-SHOP</strong> merupakan aplikasi jual beli online terpercaya yang dapat diakses dengan mudah yang tergolong ke dalam kategori e-commerce. Kehadiran <strong>E-SHOP</strong> mampu mempermudah penggunanya untuk dapat bertransaksi secara online tanpa perlu repot menuju toko secara langsung.</p>
            <div class="main-button">
              <a href="products.html">Order Now!</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Banner Ends Here -->

  <!-- Featured Starts Here -->
  <div class="featured-items">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-heading">
            <div class="line-dec"></div>
            <h1>Featured Items</h1>
          </div>
        </div>
        <div class="col-md-12">
          <div class="owl-carousel owl-theme">
            <?php
            include('connection.php');
            $sql = "SELECT * FROM barang";
            $result = $conn->query($sql);
            while ($product = mysqli_fetch_assoc($result)) {
            ?>
              <a href="single-product.php?action=add&id_barang=<?= $product['id_barang'] ?>">
                <div class="featured-item">
                  <img src="<?= $product['gambar']; ?>" alt="<?= $product['nama_barang']; ?>">
                  <h4><?= $product['nama_barang']; ?></h4>
                  <h6>Rp<?= number_format($product['harga']); ?></h6>
                </div>
              </a>
            <?php
              //$_SESSION['id_barang'] = $product['id_barang'];
            }
            ?>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Featured Ends Here -->

  <!-- Bootstrap core JavaScript -->
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>


  <!-- Additional Scripts -->
  <script src="assets/js/custom.js"></script>
  <script src="assets/js/owl.js"></script>


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