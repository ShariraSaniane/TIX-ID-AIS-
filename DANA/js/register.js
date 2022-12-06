var dana_register = "https://dana-api.glitch.me/api/register";

//post
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const name = document.querySelector("#name");
const no_hp = document.querySelector("#no_hp");
const password = document.querySelector("#password");
const buttonSubmit = document.querySelector("#submit");

buttonSubmit.addEventListener("click", (e) => {
    e.preventDefault(); 

    var raw = JSON.stringify({
        nama_user: name.value,
        no_hp: no_hp.value,
        pass: password.value    
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
        let data_dana = await getResponse(dana_register);
        

        //response string dijadiin json
        var resp_dana = JSON.parse(data_dana);

        
        if(resp_dana.status == 200){
            alert(resp_dana.message)
            window.location.href = "login.html";
        }else{
            alert(resp_dana.message);
        }

    };

    getData();

})

