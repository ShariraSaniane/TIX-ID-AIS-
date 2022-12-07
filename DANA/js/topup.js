function parseJwt (token) {
    var base64 = token.split('.')[1];
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  
    return JSON.stringify(jsonPayload);
};
  
// var parsetoken = require('./parseJWT');

//ambil token dari local.Storage. local storage ada di page source >> application
const dana = JSON.stringify(localStorage.getItem('dana'));

const balance = document.querySelector("#nominal");
const buttonSubmit = document.querySelector("#submit");

buttonSubmit.addEventListener("click", (e) => {
    e.preventDefault(); 

    var api_topup = "https://dana-api.glitch.me/api/topup";
    var token = ("Bearer " + dana).replace(/\"/g, ""); //variable untuk nyimpen token. ini yg dikirim ke api

    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        balance: balance.value
    });

    var requestOptions = {
        method: 'PUT',
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
        if(resp_api.status == 200){
            alert(resp_api.message);
            window.location.href = "profile.html";
        }else{
            alert(resp_api.message);
        }
        
    };

    getData();
})



