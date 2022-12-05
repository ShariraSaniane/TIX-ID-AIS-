//ambil token dari local.Storage. local storage ada di page source >> application
const moneygo = JSON.stringify(localStorage.getItem('moneygo'));
const harpay = JSON.stringify(localStorage.getItem('harpay'));
const coinless = JSON.stringify(localStorage.getItem('coinless'));
const met4 = JSON.stringify(localStorage.getItem('met4'));


const emoney = document.querySelector("#emoney");
const buttonSubmit = document.querySelector("#submit");
//displayed here
const id_user = document.querySelector("#id");
const nama_user = document.querySelector("#name");
const balance_user = document.querySelector("#balance");
const pin_user = document.querySelector("#pin"); //ini untuk harpay -_-
const hp_user = document.querySelector("#noTelp"); //ini untuk harpay -_-

buttonSubmit.addEventListener("click", (e) => {
    e.preventDefault(); 

    var selected = emoney.options[emoney.selectedIndex].value; //selected value from the drop down
  
    if(selected == "Moneygo"){
        var api_profile = "https://moneygo-api.herokuapp.com/api/profile";
        var token = ("Bearer " + moneygo).replace(/\"/g, ""); //variable untuk nyimpen token. ini yg dikirim ke api
        

    }
    if(selected == "Coinless"){
        var api_profile = "https://coinless.herokuapp.com/api/profile";
        var token = ("Bearer " + coinless).replace(/\"/g, ""); //variable untuk nyimpen token. ini yg dikirim ke api
        
        
    }
    if(selected == "Met4"){
        var api_profile = "https://met4kantin.herokuapp.com/api/profile";
        var token = ("Bearer " + met4).replace(/\"/g, ""); //variable untuk nyimpen token. ini yg dikirim ke api
        
        
    }
    if(selected == "Harpay"){
        var api_profile = "https://harpay-api.herokuapp.com/auth/profile";
        var token = ("Bearer " + harpay).replace(/\"/g, ""); //variable untuk nyimpen token. ini yg dikirim ke api
        
        
    }

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
        
            if(selected == "Moneygo"){
                var name = resp_api.name;
                var id = resp_api.id;
                var saldo = resp_api.balance;
                var pin = "";
                var noTelp = "";
            }
            if(selected == "Harpay"){
                var name = resp_api.name;
                var id = resp_api._id;
                var saldo = resp_api.saldo;
                var pin = resp_api.pin;
                var noTelp = resp_api.noTelp;
            }
            if(selected == "Met4"){
                var name = resp_api.data.name;
                var id = resp_api.data.uid;
                var saldo = resp_api.data.cash;
                var pin = "";
                var noTelp = "";
            }
            if(selected == "Coinless"){
                var name = resp_api.name;
                var id = resp_api.id_user;
                var saldo = resp_api.saldo;
                var pin = "";
                var noTelp = "";
            }

            
            id_user.innerText = id;
            nama_user.innerText = name;
            balance_user.innerText = saldo;
            pin_user.innerText = pin;
            hp_user.innerText = noTelp;
        
        
        if(resp_api.name === null){
            alert("try again");
        }
    };

    getData();

})