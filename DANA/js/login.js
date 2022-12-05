var moneygo_login = "https://moneygo-api.herokuapp.com/api/login";
var coinless_login = "https://coinless.herokuapp.com/api/login";
var harpay_login = "https://harpay-api.herokuapp.com/auth/login";
var met4_login = "https://met4kantin.herokuapp.com/api/login";

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const buttonSubmit = document.querySelector("#submit");

buttonSubmit.addEventListener("click", (e) => {
    e.preventDefault(); // mencegah refresh

    var raw = JSON.stringify({
        email: email.value,
        pass: password.value,
        password: password.value //harpay req.bodynya password, bkn pass
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    async function getResponse(url){
        try {
            let res = await fetch(url, requestOptions)
            console.log("Fetch berhasil");
            return await (res.text());
        } catch(error) {
            console.log('error', error)
        };
    }

    async function getData(){
        //response masih dalam bentuk string
        let data_moneygo = await getResponse(moneygo_login);
        let data_coinless = await getResponse(coinless_login);
        let data_harpay = await getResponse(harpay_login);
        let data_met4 = await getResponse(met4_login);
        
        //response string dijadiin json
        var resp_moneygo = JSON.parse(data_moneygo);
        var resp_coinless= JSON.parse(data_coinless);
        var resp_harpay= JSON.parse(data_harpay);
        var resp_met4= JSON.parse(data_met4);

        //kalo success
        if(resp_moneygo.success == true && resp_met4.status == 200 && resp_coinless.status == 200 && resp_harpay.message == "Auth success"){
            window.localStorage.setItem('moneygo', resp_moneygo.token);
            window.localStorage.setItem('coinless', resp_coinless.jwt);
            window.localStorage.setItem('harpay', resp_harpay.token);
            window.localStorage.setItem('met4', resp_met4.jwt);
            
            window.location.href = "home.php";
        }else{
            alert("try again");
        }
        
        // if(resp_moneygo.error == true && resp_coinless.jwt ){
            
        // }
    };

    getData();
})