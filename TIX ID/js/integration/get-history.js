/* requestFunction(headers, link, raw, method)

headers = [isi 1, isi 2]
requestWithoutBody(link, method) */
let tblHistory = document.getElementById('isi-history');
getHistory()

async function getHistory(){
    let token = getToken('tixid')
    
    var headers = [
        "Authorization",
        "Bearer " + token
    ]

    let response = await integration.requestFunction (headers, baseURLTixID + "/history", null, 'GET')
    anotherFunction(JSON.stringify(response));
};

function anotherFunction(response){
    let data = JSON.parse(response);
    data = data.history
    if(data.length > 0 ){
        for (let i = 0; i < data.length; i++){
            createTable(data[i], i + 1)
        }
    } 
};

function createTable (data, iterator){
    // CREATE ELEMENT
    const trEl = document.createElement("tr");

    const nomor = document.createElement("td")

    const tanggalPembelian = document.createElement("td")

    const judulFilm = document.createElement("td")
    const tanggalFilm = document.createElement("td")

    const jumlahTiket = document.createElement("td")
    const totalHarga = document.createElement("td")
    const statusPembelian = document.createElement("td")
    
    // INNER TEXT
    nomor.innerText = iterator

    tanggalPembelian.innerText = changeTimestampSQL(data.tanggal_pembelian)

    tanggalFilm.innerText = changeTimestampSQL(data.tanggal_film)
    judulFilm.innerText = data.judul_film
    jumlahTiket.innerText = data.jumlah_tiket
    totalHarga.innerText = data.harga_pembelian

    if (data.status_pembelian == 0){
        statusPembelian.innerText = "Belum Berhasil"
    } else if (data.status_pembelian == 1){
        statusPembelian.innerText = "Berhasil"
    } else {
        statusPembelian.innerText = "Belum Berhasil"
    }

    // APPEND TD to TR
    trEl.appendChild(nomor)
    trEl.appendChild(tanggalPembelian)
    trEl.appendChild(judulFilm)
    trEl.appendChild(tanggalFilm)
    trEl.appendChild(jumlahTiket)
    trEl.appendChild(totalHarga)
    trEl.appendChild(statusPembelian)

    // APPEND TR to <tbody>
    tblHistory.append(trEl)
    
    return;
}