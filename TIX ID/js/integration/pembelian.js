/* requestFunction(headers, link, raw, method)

headers = [isi 1, isi 2]
requestWithoutBody(link, method) */

const btnBayar = document.querySelector('#btnPesan');
btnBayar.addEventListener("click", e => {
    const valueTiket = document.querySelector("#value-tiket").value

    // Change id film later
    bayar(1, valueTiket)
})

async function bayar(id_film, jumlah_tiket){
    let token = getToken('tixid')
    let tokenSarah = getToken('dana')
    
    if(token == null && tokenSarah == null){
        alert("Please login first")
        return window.location.href == '/login/index.html'
    }

    var headers = [
        "Authorization",
        "Bearer " + token,
        "Content-Type",
        "application/json"
    ]

    var raw = JSON.stringify({
        "id_film": id_film,
        "jumlah_tiket": jumlah_tiket,
        "tokenSarah": tokenSarah
    })

    let response = await integration.requestFunction(headers, baseURLTixID + "/pembelian", raw, 'POST')
    bayarbayar(JSON.stringify(response));
};

function bayarbayar(response){
    let data = JSON.parse(response);
    console.log( "data", data)

    if (data.status == 200){
        alert("Pembelian berhasil, silahkan cek riwayat")
        return window.location.href='history.html'
    } else {
        alert(data.message)
        return location.reload();
    }
};