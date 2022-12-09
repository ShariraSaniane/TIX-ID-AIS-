var baseURLDANA = "https://dana-api.glitch.me/api";
var baseURLTixID = "https://tixid-api.glitch.me/api"

function requestMethod (method, headers, raw){
    var request = {
        method: method,
        body: raw,
        redirect: 'follow'
    }

    if (headers != null){
        request.headers = headers
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
        return this.response (link, requestMethod(method, null, null))
    },

    requestFunction: function (headersKiri, headersKanan, link, raw, method){
        var myHeaders = new Headers();
        
        for (let i = 0; i < headers.length; i++){
            myHeaders.append(headersKiri, headersKanan);
        }

        // Integration to TIX ID
        return this.response(link, requestMethod(method, myHeaders, raw));
    },

    response: async function(url, requestMethod){
        return JSON.parse(await getResponse(url, requestMethod))
    }
}