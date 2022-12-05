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
$harga = $product['harga'];
$quantity = $_POST['quantity'];
$total_harga = $harga * $quantity;

// $data = ['nama_barang' => $nama_barang, 'total_harga' => $total_harga];
// echo json_encode($data);


?>

<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700" rel="stylesheet">

    <title>E-SHOP - Checkout</title>

    <!-- Bootstrap core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">


    <!-- Additional CSS Files -->
    <link rel="stylesheet" href="assets/css/fontawesome.css">
    <link rel="stylesheet" href="assets/css/tooplate-main.css">
    <link rel="stylesheet" href="assets/css/owl.css">

    <!-- Favicon  -->
    <link rel="icon" href="images/favicon.ico">

    <!-- Core Style CSS -->
    <link rel="stylesheet" href="css/core-style.css">
    <link rel="stylesheet" href="css/cartstyle.css">

    <!-- Responsive CSS -->
    <link href="css/responsive.css" rel="stylesheet">

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
                        <a class="nav-link" href="home.php">Home
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
    <!-- ****** Checkout Area Start ****** -->
    <div class="checkout-area">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-heading">
                        <div class="line-dec"></div>
                        <h1>Check Out</h1>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="checkout_details_area mt-50 clearfix">
                        <?php

                        $sql2 = "INSERT INTO transaksi (nama_barang, harga, quantity, total_harga) values('$nama_barang', '$harga', '$quantity', '$total_harga')";
                        $result2 = $conn->query($sql2);

                        ?>
                        <img src="<?= $gambar ?>">

                    </div>
                </div>

                <div class="col-12 col-md-8">
                    <div class="order-details-confirmation">

                        <div class="cart-page-heading">
                            <h5>Your Order</h5>
                            <p id="name"><?= $nama_barang ?></p>
                        </div>

                        <ul class="order-details-form mb-4">
                            <li>
                                <span>
                                    <h6>Price</h6>
                                </span>
                                <span>
                                    <h6>Rp<?= $harga ?></h6>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <h6>Quantity</h6>
                                </span>
                                <span>
                                    <h6><?= $quantity ?></h6>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <h6>Total</h6>
                                </span>
                                <span>
                                    <h6>Rp<?= $total_harga ?></h6>
                                </span>
                            </li>
                        </ul>


                        <div id="accordion" role="tablist" class="mb-4">
                            <div class="card">
                                <div class="card-header" role="tab" id="headingOne">
                                    <form>

                                        <div class="cart-page-heading">
                                            <p>Choose a payment method:
                                            <p>
                                                <select id="emoney" class="form-control">
                                                    <option value="Moneygo">Moneygo</option>
                                                    <option value="Met4">Met4Kantin</option>
                                                    <option value="Harpay">Harpay</option>
                                                    <option value="Coinless">Coinless</option>
                                                </select>
                                                <label></label>
                                            <div class=mb-6">
                                                <input class="form-control" placeholder="Pin Harpay" id="pin" name="pin">
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>

                        <a href="#" class="btn karl-checkout-btn" id="submit">Place Order</a>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <!-- ****** Checkout Area End ****** -->
    <script>
        <?php
        echo "var nama_barang ='$nama_barang';";
        echo "var total_harga ='$total_harga';";
        ?>
        console.log(nama_barang);

        function parseJwt(token) {
            var base64 = token.split('.')[1];
            var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));

            return JSON.stringify(jsonPayload);
        };

        //ambil token dari local.Storage. local storage ada di page source >> application
        const moneygo = JSON.stringify(localStorage.getItem('moneygo'));
        const met4 = JSON.stringify(localStorage.getItem('met4'));
        const harpay = JSON.stringify(localStorage.getItem('harpay'));
        const coinless = JSON.stringify(localStorage.getItem('coinless'));


        // const hp = document.querySelector("#hp"); //hp penerima harpay
        // const email = document.querySelector("#email"); //receiver's
        // const price = document.getElementById("#price");
        const emoney = document.querySelector("#emoney");
        const pin = document.querySelector("#pin"); //pin harpay
        const buttonSubmit = document.querySelector("#submit");



        buttonSubmit.addEventListener("click", (e) => {
            e.preventDefault();

            var selected = emoney.options[emoney.selectedIndex].value; //selected value from the drop down

            if (selected == "Moneygo") {
                var api_transaksi = "https://moneygo-api.herokuapp.com/api/transaksi";
                var token = ("Bearer " + moneygo).replace(/\"/g, ""); //variable untuk nyimpen token. ini yg dikirim ke api
                var method = "POST";

                var raw = JSON.stringify({
                    balance: total_harga
                });

            }
            if (selected == "Coinless") {
                var parsed_harga = parseInt(total_harga);
                console.log(parsed_harga);

                var dataToken = parseJwt(coinless);
                var id = dataToken.id_user;

                var api_transaksi = "https://coinless.herokuapp.com/api/pembelian";
                var token = ("Bearer " + coinless).replace(/\"/g, ""); //variable untuk nyimpen token. ini yg dikirim ke api
                var method = "PUT";

                var raw = JSON.stringify({
                    jumlah: parsed_harga,
                    id_user: id,
                    nama_barang: nama_barang
                });

            }
            if (selected == "Met4") {
                var parsed_harga = parseInt(total_harga);
                console.log(parsed_harga);

                var api_transaksi = "https://met4kantin.herokuapp.com/api/pay";
                var token = ("Bearer " + met4).replace(/\"/g, ""); //variable untuk nyimpen token. ini yg dikirim ke api
                var method = "PUT";

                var raw = JSON.stringify({
                    jumlah: parsed_harga,
                });

            }
            if (selected == "Harpay") {
                var parsed_pin = parseInt(pin.value);
                console.log(total_harga);
                console.log(pin.value);

                var api_transaksi = "https://harpay-api.herokuapp.com/transaksi/bayar";
                var token = ("Bearer " + harpay).replace(/\"/g, ""); //variable untuk nyimpen token. ini yg dikirim ke api
                var method = "POST";

                var raw = JSON.stringify({
                    jumlahBayar: total_harga,
                    pin: parsed_pin
                });
            }

            var myHeaders = new Headers();
            myHeaders.append("Authorization", token);
            myHeaders.append("Content-Type", "application/json");


            var requestOptions = {
                method: method,
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            async function getResponse() {
                try {
                    let res = await fetch(api_transaksi, requestOptions)
                    console.log("Fetch berhasil");
                    return await (res.text());
                } catch (error) {
                    console.log('error', error)
                };
            }

            async function getData() {

                //response masih dalam bentuk string
                let data_api = await getResponse();
                // let data_coinless = await getResponse(coinless_login);
                // let data_harpay = await getResponse(harpay_login);
                // let data_ecia = await getResponse(ecia_login);
                console.log(data_api)

                //response string dijadiin json
                var resp_api = JSON.parse(data_api);
                // var resp_coinless= JSON.parse(data_coinless);
                // var resp_harpay= JSON.parse(data_harpay);
                // var resp_ecia= JSON.parse(data_ecia);

                //kalo success
                if (resp_api.status == 200 || resp_api.message == "Transaction successfully") {
                    alert(resp_api.message);
                    window.location.href = "home.php";
                } else {
                    alert(resp_api.message);
                }

                // if(resp_moneygo.error == true && resp_coinless.jwt ){

                // }
            };

            getData();
        })
    </script>



    <!-- Bootstrap core JavaScript -->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>


    <!-- Additional Scripts -->
    <script src="assets/js/custom.js"></script>
    <script src="assets/js/owl.js"></script>
    <script src="js/jquery/jquery-2.2.4.min.js"></script>
    <!-- Popper js -->
    <script src="js/popper.min.js"></script>
    <!-- Bootstrap js -->
    <script src="js/bootstrap.min.js"></script>
    <!-- Plugins js -->
    <script src="js/plugins.js"></script>
    <!-- Active js -->
    <script src="js/active.js"></script>
    <!-- <script src="checkout.js"></script> -->


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