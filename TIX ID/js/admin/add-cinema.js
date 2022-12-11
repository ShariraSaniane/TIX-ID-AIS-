/* requestFunction(headers, link, raw, method)

headers = [isi 1, isi 2]
requestWithoutBody(link, method) */

const btnSubmit = document.querySelector('#btnSend')
btnSubmit.addEventListener("click", e => {
    console.log("btnClicked")
    template();
})

async function template(){
    let token = getToken('tixid')
    console.log(token)

    const bioskopValue = document.querySelector('#nama_bioskop').value
    
    var headers = [
        "Content-Type",
        "application/json",
        "Authorization",
        "Bearer " + token
    ]

    if(bioskopValue == ""){
        return alert("Masukkan nama bioskop")
    }

    var raw = JSON.stringify({
        "nama": bioskopValue
    })

    let response = await integration.requestFunction(headers, baseURLTixID + "/bioskop", raw, 'POST')
    handleResponse(JSON.stringify(response));
};

function handleResponse(response){
    let data = JSON.parse(response);
    alert(data.message)

    return window.location.reload();
};