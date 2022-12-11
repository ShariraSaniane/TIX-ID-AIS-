/* requestFunction(headers, link, raw, method)

headers = [isi 1, isi 2]
requestWithoutBody(link, method) */

(async function template(){
    let token = getToken('tixid')
    
    var headers = [
        "Authorization",
        token
    ]

    var raw = JSON.stringify({

    })

    let response = await integration.requestFunction(headers, baseURLTixID + "/film", raw, 'GET')
    handleResponse(JSON.stringify(response));
})();

function handleResponse(response){
    let data = JSON.parse(response);
};