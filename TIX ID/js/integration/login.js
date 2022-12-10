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

    var raw = JSON.stringify({
        "nomorhp": txtNoHp,
        "no_hp": txtNoHp,
        "password": txtPassword,
        "pass":txtPassword
    })

    requestLogin(headers, raw)
})

async function requestLogin(headers, raw){
    let responseTIX = await integration.requestFunction(headers, 
                                                        baseURLTixID + "/login", 
                                                        raw, 
                                                        'POST');

    let responseDANA = await integration.requestFunction(headers, 
                                                        baseURLDANA + "/login", 
                                                        raw, 
                                                        'POST')

    if(responseTIX.status == 200|| responseDANA == 200){
        setToken('dana', responseDANA.token);
        setToken('tixid', responseTIX.token);

        return login(responseDANA, responseTIX);
    }
    
    else {
        return alert("Nomor HP atau password salah")
    }
};

function setToken (nama, isiToken){
    window.localStorage.setItem(nama, isiToken);
}

function login(dataDANA, dataTIX){
    let decodedTIX = JSON.parse(JSON.parse(decodeToken(dataTIX.token)));
    console.log(decodedTIX)

    let roleTIX = decodedTIX.rows[0].role_user

    if(roleTIX == 0){
        window.location.href = "../index.html";
    }
    
    if(roleTIX == 1){
        window.location.href= "../Admin/index.html"
    }
};