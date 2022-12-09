/* requestFunction(headers, link, raw, method)
headers = [isi 1, isi 2]
requestWithoutBody(link, method) */

const btnLogin = document.querySelector('#btn-login');

btnLogin.addEventListener("click", e => {
    var headers =  ["Content-Type", "application/json"]

    const txtNoHp = document.querySelector('.txtNoHp').value;
    const txtPassword = document.querySelector('.txtPassword').value;

    if (txtNoHp == "" || txtPassword == ""){
        alert ("Masukkan nomor hp dan password");
        return;
    }

    console.log("Halo");

    var raw = {
        nomorhp: txtNoHp,
        password: txtPassword
    }

    var link = baseURLTixID + "/login"

    requestA(headers, link, raw)
})

async function requestA(headers, link, raw){
    let response = await integration.requestFunction(headers, link, raw, 'POST')
    login(JSON.stringify(response));
    console.log(response);
};

function login(response){
    let data = JSON.parse(response);
};