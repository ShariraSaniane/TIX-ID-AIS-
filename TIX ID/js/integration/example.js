// requestFunction(headersKiri, headersKanan, link, raw, method)
// requestWithoutBody(link, method)

(async function getFilm(){
    let response = await integration.requestWithoutBody(baseURLTixID + "/film", 'GET')
    anotherFunction(JSON.stringify(response));
})();

function anotherFunction(response){
    console.log("halo");
};