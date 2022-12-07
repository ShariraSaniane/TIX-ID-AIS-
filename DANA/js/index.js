window.localStorage.clear();

// api url
const dana = "https://dana-api.glitch.me/api/";

//get
fetch(dana)
.then((response)=>response.json())
.then((json)=>console.log(json))


// var dana = "https://dana-api.glitch.me/api/";

// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
// };

// async function getResponse(){
//     try {
//         let res = await fetch(dana, requestOptions)
//         console.log("Fetch berhasil");
//         window.localStorage.clear();
//         return await (res.text());
//     } catch(error) {
//         console.log('error', error)
//     };
// }

