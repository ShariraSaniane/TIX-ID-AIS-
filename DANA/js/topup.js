function parseJwt (token) {
    var base64 = token.split('.')[1];
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  
    return JSON.stringify(jsonPayload);
};
  
// var parsetoken = require('./parseJWT');

//ambil token dari local.Storage. local storage ada di page source >> application
const moneygo = JSON.stringify(localStorage.getItem('moneygo'));
const harpay = JSON.stringify(localStorage.getItem('harpay'));
const coinless = JSON.stringify(localStorage.getItem('coinless'));
const met4 = JSON.stringify(localStorage.getItem('met4'));


const balance = document.querySelector("#nominal");
const emoney = document.querySelector("#emoney"); 
const buttonSubmit = document.querySelector("#submit");

buttonSubmit.addEventListener("click", (e) => {
    e.preventDefault(); 

    var selected = emoney.options[emoney.selectedIndex].value; //selected value from the drop down
  
    if(selected == "Moneygo"){
        var api_topup = "https://moneygo-api.herokuapp.com/api/topup";
        var token = ("Bearer " + moneygo).replace(/\"/g, ""); //variable untuk nyimpen token. ini yg dikirim ke api
        var method = "PUT";

    }
    if(selected == "Coinless"){
        var dataToken = parseJwt(coinless);
        var id = dataToken.id_user;

        var api_topup = "https://coinless.herokuapp.com/api/profile/" + id;
        var token = ("Bearer " + coinless).replace(/\"/g, ""); //variable untuk nyimpen token. ini yg dikirim ke api
        var method = "PUT";
        
    }
    if(selected == "Met4"){
        var dataToken = parseJwt(met4);
        var user = dataToken.id;

        var api_topup = "https://met4kantin.herokuapp.com/api/profile/" + user;
        var token = ("Bearer " + met4).replace(/\"/g, ""); //variable untuk nyimpen token. ini yg dikirim ke api
        var method = "PUT";
        
    }
    if(selected == "Harpay"){
        var api_topup = "https://harpay-api.herokuapp.com/transaksi/topup";
        var token = ("Bearer " + harpay).replace(/\"/g, ""); //variable untuk nyimpen token. ini yg dikirim ke api
        var method = "POST";
        
    }

    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        balance: balance.value,
        nominal: balance.value,
        jumlah: balance.value
    });

    var requestOptions = {
        method: method,
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    async function getResponse(){
        try {
            let res = await fetch(api_topup, requestOptions)
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
        if(resp_api.status == 200 || resp_api.message == "Topup successfully!"){
            alert(resp_api.message);
            window.location.href = "home.php";
        }else{
            alert(resp_api.message);
        }
        
    };

    getData();
})



