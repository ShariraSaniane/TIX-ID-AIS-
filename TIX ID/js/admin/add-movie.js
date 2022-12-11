/* requestFunction(headers, link, raw, method)

headers = [isi 1, isi 2]
requestWithoutBody(link, method) */

const btnSubmit = document.querySelector('#btn-send')
btnSubmit.addEventListener("click", e => {
    console.log("btnClicked")
    template();
})

async function template(){
    let token = getToken('tixid')
    console.log(token)

    const judulValue = document.querySelector('#judul_film').value
    const tanggalValue = document.querySelector('#tanggal_film').value
    const waktuValue = document.querySelector('#waktu_film').value
    const bioskopValue = document.querySelector('#id_bioskop').value
    const hargaValue = document.querySelector('#harga_tiket').value

    if(judulValue == "" || tanggalValue == "" || waktuValue == "" || bioskopValue == "" || hargaValue == ""){
        return alert("Masukkan nama bioskop")
    }
    
    var headers = [
        "Content-Type",
        "application/json",
        "Authorization",
        "Bearer " + token
    ]

    var raw = JSON.stringify({
        "judul": judulValue,
        "tanggal": tanggalValue,
        "waktu": waktuValue,
        "id_bioskop": bioskopValue,
        "harga_tiket": hargaValue 
    })

    let response = await integration.requestFunction(headers, baseURLTixID + "/film", raw, 'POST')
    handleResponse(JSON.stringify(response));
};

function handleResponse(response){
    let data = JSON.parse(response);
    alert(data.message)

    return window.location.reload();
};