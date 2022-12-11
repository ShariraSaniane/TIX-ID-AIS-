/* requestFunction(headers, link, raw, method)

headers = [isi 1, isi 2]
requestWithoutBody(link, method) */
let tblHistory = document.getElementById('isi-history');
getHistory()

async function getHistory(){
    let token = getToken('dana')
    
    var headers = [
        "Authorization",
        token
    ]

    let response = await integration.requestFunction (headers, baseURLDANA+ "/history", null, 'GET')
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