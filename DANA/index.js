window.localStorage.clear();

// api url
const moneygo = "https://moneygo-api.herokuapp.com/api/";

//get
fetch(moneygo)
.then((response)=>response.json())
.then((json)=>console.log(json))


