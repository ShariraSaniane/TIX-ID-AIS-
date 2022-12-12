/* requestFunction(headers, link, raw, method)
headers = [isi 1, isi 2]
// requestWithoutBody(link, method) */

(async function getBioskop(){
    let response = await integration.requestWithoutBody(baseURLTixID + "/bioskop", 'GET');
    handleResponse(JSON.stringify(response.bioskop));
})();

function handleResponse(response){
    var subjectObject = JSON.parse(response);
    console.log(subjectObject);
}