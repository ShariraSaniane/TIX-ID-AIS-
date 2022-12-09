/* requestFunction(headers, link, raw, method)

headers = [isi 1, isi 2]
requestWithoutBody(link, method) */

(async function template(){
    let response = await integration.requestWithoutBody(baseURLTixID + "/film", 'GET')
    anotherFunction(JSON.stringify(response));
})();

function anotherFunction(response){
    let data = JSON.parse(response);
};