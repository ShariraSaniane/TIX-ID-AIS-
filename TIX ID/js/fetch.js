var baseURLDANA = "https://dana-api.glitch.me/api";
var baseURLTixID = "https://tixid-api.glitch.me/api"

function requestMethod (method, header, raw){
    if (header != null){
        request = {
            method: method,
            body: raw,
            redirect: 'follow',
            headers: header
        }
    } else {
        request = {
            method: method,
            body: raw,
            redirect: 'follow'
        }
    }

    return request;
}

async function getResponse(url, requestMethod){
    try {
        let res = await fetch(url, requestMethod)
        console.log("Fetch berhasil");
        return await (res.text());
    } catch(error) {
        console.log('error', error)
    };
}

const integration ={
    requestWithoutBody:function(link, method){
        console.log("Requested")
        return this.response (link, requestMethod(method, null, null))
    },

    requestFunction: function (headers, link, raw, method){
        console.log("Requested")
        var myHeaders = new Headers();
        
        for (let i = 0; i < headers.length; i += 2){
            myHeaders.append(headers[i], headers[i + 1]);
        }

        // Integration to TIX ID
        return this.response(link, requestMethod(method, myHeaders, raw));
    },

    response: async function(url, requestMethod){
        return JSON.parse(await getResponse(url, requestMethod))
    }
}

function decodeToken (token) {
    var base64 = token.split('.')[1];
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  
    return JSON.stringify(jsonPayload);
};