//ambil token dari local.Storage. local storage ada di page source >> application
const moneygo = JSON.stringify(localStorage.getItem('moneygo'));
// const ecia = JSON.stringify(localStorage.getItem('ecia'));
const harpay = JSON.stringify(localStorage.getItem('harpay'));
const coinless = JSON.stringify(localStorage.getItem('coinless'));


const id_penerima = document.querySelector("#id_penerima"); //id penerima coinless
const hp = document.querySelector("#hp"); //hp penerima harpay
const email = document.querySelector("#email"); //receiver's email moneygo
const balance = document.querySelector("#nominal");
const emoney = document.querySelector("#emoney"); 
const pin = document.querySelector("#pin"); //pin harpay
const buttonSubmit = document.querySelector("#submit");

buttonSubmit.addEventListener("click", (e) => {
    e.preventDefault(); 

    var selected = emoney.options[emoney.selectedIndex].value; //selected value from the drop down
  
    if(selected == "Moneygo"){
        var api_transfer = "https://moneygo-api.herokuapp.com/api/transfer";
        var token = ("Bearer " + moneygo).replace(/\"/g, ""); //variable untuk nyimpen token. ini yg dikirim ke api
        var method = "PUT";

        var raw = JSON.stringify({
            email: email.value,
            balance: balance.value
        });

    }
    if(selected == "Coinless"){
        var parsed_harga = parseInt(balance.value);
        // console.log(total_harga);
        // console.log(pin.value);

        var api_transfer = "https://coinless.herokuapp.com/api/transfer";
        var token = ("Bearer " + coinless).replace(/\"/g, ""); //variable untuk nyimpen token. ini yg dikirim ke api
        var method = "POST";

        var raw = JSON.stringify({
            tujuan:id_penerima.value,
            jumlah: parsed_harga
        });
        
    }
    if(selected == "Harpay"){
        var parsed_pin = parseInt(pin.value);
        // console.log(total_harga);
        console.log(pin.value);

        var api_transfer = " https://harpay-api.herokuapp.com/transaksi/transferSaldo";
        var token = ("Bearer " + harpay).replace(/\"/g, ""); //variable untuk nyimpen token. ini yg dikirim ke api
        var method = "POST";

        var raw = JSON.stringify({
        noTelp: hp.value,
        nominal: balance.value,
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

    async function getResponse(){
        try {
            let res = await fetch(api_transfer, requestOptions)
            console.log("Fetch berhasil");
            return await (res.text());
        } catch(error) {
            console.log('error', error)
        };
    }

    async function getData(){

        //response masih dalam bentuk string
        let data_api = await getResponse();
        console.log(data_api)
        
        //response string dijadiin json
        var resp_api = JSON.parse(data_api);

        //kalo success
        if(resp_api.status == 200 || resp_api.message == "Successfully payment for transfer saldo"){
            alert(resp_api.message);
            window.location.href = "home.php";
        }else{
            alert(resp_api.message);
        }
        
    };

    getData();
})



