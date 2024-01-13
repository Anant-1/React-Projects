var myHeaders = new Headers();
myHeaders.append("apikey", "h0BpJMxLbUVHEPYmRZHPgi2FUHFVWiBr");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/youtube/search?q=New", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//   https://api.apilayer.com/youtube/search/?q=New