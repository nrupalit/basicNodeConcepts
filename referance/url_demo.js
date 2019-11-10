const url = require('url');

const myUrl = new URL('http://websitesample.com:8000/hello.html?id=1000&status=active');

//serialise URL
console.log(myUrl.href);
console.log(myUrl.toString());

//Host (root name)
console.log(myUrl.host);
//Hostname(does not get port)
console.log(myUrl.hostname);
//pathname
console.log(myUrl.pathname);
//serialise query
console.log(myUrl.search);
//params object
console.log(myUrl.searchParams);
//Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);
//loop through params
myUrl.searchParams.forEach((value, name)=> console.log(`${name}: ${value}`));
