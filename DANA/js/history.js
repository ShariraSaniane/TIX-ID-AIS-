//ambil token dari local.Storage. local storage ada di page source >> application
const dana = JSON.stringify(localStorage.getItem('dana'));

//displayed here
let tblHistory = document.getElementById('isi-history');


var api_history = "https://dana-api.glitch.me/api/history";
var token = ("Bearer " + dana).replace(/\"/g, ""); //variable untuk nyimpen token. ini yg dikirim ke api
    
var myHeaders = new Headers();
myHeaders.append("Authorization", token);
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};


async function getResponse(){
    try {
        let res = await fetch(api_history, requestOptions)
        console.log("Fetch berhasil");
        return await (res.text());
    } catch(error) {
        console.log('error', error)
    };
}


async function getData(){
    //response masih dalam bentuk string
    let data_api = await getResponse();
    // console.log(data_api)

    var resp_api =JSON.parse(data_api);
    resp_api = resp_api.history;
    if(resp_api.length > 0){
        for (let i = 0; i < resp_api.length; i++){
            createTable(data[i], i + 1)
        }
    }
    
    if(resp_api.status ==! 200){
        alert("try again");
    }
};

function createTable (data, iterator){
    // CREATE ELEMENT
    const trEl = document.createElement("tr");

    const no = document.createElement("td")
    const date = document.createElement("td")
    const from = document.createElement("td")
    const to = document.createElement("td")
    const amount = document.createElement("td")
    
    // INNER TEXT
    no.innerText = iterator
    date.innerText = changeTimestampSQL(data.datetime)
    from.innerText = data.pengirim
    to.innerText = data.penerima
    amount.innerText = data.jumlah

    // APPEND TD to TR
    trEl.appendChild(no)
    trEl.appendChild(date)
    trEl.appendChild(from)
    trEl.appendChild(to)
    trEl.appendChild(amount)

    // APPEND TR to <tbody>
    tblHistory.append(trEl)
    
    return;
}

getData();
