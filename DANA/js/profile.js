//ambil token dari local.Storage. local storage ada di page source >> application
const dana = JSON.stringify(localStorage.getItem('dana'));

//displayed here
const id_user = document.querySelector("#id");
const nama_user = document.querySelector("#name");
const hp_user = document.querySelector("#no_hp");
const balance_user = document.querySelector("#balance");


var api_profile = "https://dana-api.glitch.me/api/profile";
var token = ("Bearer " + dana).replace(/\"/g, ""); //variable untuk nyimpen token. ini yg dikirim ke api
    
var myHeaders = new Headers();
myHeaders.append("Authorization", token);
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};


async function getResponse(){
    try {
        let res = await fetch(api_profile, requestOptions)
        console.log("Fetch berhasil");
        return await (res.text());
    } catch(error) {
        console.log('error', error)
    };
}


async function getData(){
    //response masih dalam bentuk string
    let data_api = await getResponse();
    // console.log(data_api)

    var resp_api =JSON.parse(data_api);

    var id = resp_api.id;   
    var name = resp_api.name;
    var no_hp = resp_api.no_hp;
    var saldo = resp_api.balance;

    id_user.innerText = id;
    nama_user.innerText = name;
    hp_user.innerText = no_hp;
    balance_user.innerText = saldo;
    
    if(resp_api.name === null){
        alert("try again");
    }
};

getData();
