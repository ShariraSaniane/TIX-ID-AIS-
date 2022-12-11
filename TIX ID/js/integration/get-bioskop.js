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
  
    window.onload = function() {
        console.log("tes")
      var subjectSel = document.getElementById("cinema");
      
      for (let x = 0; x < subjectSel.length; x++) {
        subjectSel.options[subjectSel.options.length] = new Option(x, x);
      }
      subjectSel.onchange = function() {
        //empty Chapters- and Topics- dropdowns
        chapterSel.length = 1;
        topicSel.length = 1;
      }
      
    }
}