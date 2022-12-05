// function parseJwt(token) {
//     var base64Payload = token.split('.')[1];
//     var payload = Buffer.from(base64Payload, 'base64');
//     return JSON.parse(payload.toString()).rows[0];
// }

function parseJwt (token) {
    var base64 = token.split('.')[1];
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  
    return JSON.stringify(jsonPayload);
  };

module.exports = parseJwt