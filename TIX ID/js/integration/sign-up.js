/* requestFunction(headers, link, raw, method)

headers = [isi 1, isi 2]
requestWithoutBody(link, method) */

const btnSignUp = document.querySelector('#btnSignUp')

btnSignUp.addEventListener("click" , e => {
    var headers =  ["Content-Type", "application/json"]

    const txtNoHp = document.querySelector('.txtNoHp').value;
    const txtPassword = document.querySelector('.txtPassword').value;
    const txtNama = document.querySelector('.txtNama').value;

    if (txtNoHp == "" || txtPassword == "" || txtNama == ""){
        alert ("Masukkan nama, nomor hp dan password");
        return;
    }

    var raw = JSON.stringify({
        "nama_user": txtNama,
        "nama": txtNama,
        "nomorhp": txtNoHp,
        "no_hp": txtNoHp,
        "password": txtPassword,
        "pass":txtPassword
    })

    requestRegister(headers, raw);
})

async function requestRegister(headers, raw){
    // requestFunction(headers, link, raw, method)
    let responseTIX = await integration.requestFunction(headers, baseURLTixID + "/profil", raw, 'POST') 
    console.log(responseTIX)
    // let responseDANA = await integration.requestFunction(headers
    //                                                 , baseURLDANA + "/register"
    //                                                 , raw
    //                                                 , 'POST')
    
    if (responseTIX.status == 400){ // && responseDANA.status == 400){
        alert (responseTIX.message)
        return window.location.href = 'signUp.html'
    }

    var response = {
        tixid: responseTIX,
        //dana: responseDANA
    }

    console.log(response)

    return movePage(JSON.stringify(response));
};

function movePage(response){
    console.log("MovePage");
    window.location.href = 'index.html'
};