//ambil token dari local.Storage. local storage ada di page source >> application
const dana = JSON.stringify(localStorage.getItem('dana'));

const hp_penerima = document.querySelector("#no_hp"); // receiver's phone
const balance = document.querySelector("#nominal");
const buttonSubmit = document.querySelector("#submit");

buttonSubmit.addEventListener("click", (e) => {
    e.preventDefault(); 

    var api_transfer = "https://dana-api.glitch.me/api/transfer";
    var token = ("Bearer " + dana).replace(/\"/g, ""); //variable untuk nyimpen token. ini yg dikirim ke api

    var raw = JSON.stringify({
        receiver_hp: hp_penerima.value,
        balance: balance.value
    });

    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");
    

    var requestOptions = {
        method: 'POST',
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
        if(resp_api.status == 200){
            alert(resp_api.message);
            window.location.href = "profile.html";
        }else{
            alert(resp_api.message);
        }
        
    };

    getData();
})



