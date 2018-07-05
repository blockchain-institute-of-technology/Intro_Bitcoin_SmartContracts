let http = require('http'); 
let price = require('crypto-price')
//Array of cryptocurrency tickers 
const base = 'USD'
let cryptos = ['BTC', 'ETH', 'LTC', 'XMR', 'XRP', 'ZEC'];
let prices = [];
let content = '<!doctype html>\n<html lang="en">\n' + 
    '\n<meta charset="utf-8">\n<title>My basic node app</title>\n' + 
    '<style type="text/css">* {font-family:arial, sans-serif;}</style>\n' + '<div><p><b>Price of top cryptocurrencies</b></p><ul>';

//Notice the array is not being displayed in the same order everytime
//This is price.getCryptoPrice is an async function
for (i = 0; i < cryptos.length; i++) { 
	let crypto = cryptos[i];
	let cryptoPrice = price.getCryptoPrice(base, crypto).then(obj => { // Base for ex - USD, Crypto for ex - ETH 
		prices[i] = obj.price;
		content += '<li><b>'+ crypto +' </b>$' + prices[i] + '</li>';

	}).catch(err => {
    	console.log(err)
	})
}
content += '</div></ul>'

 
http.createServer(function(req, res) {  
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write(content);
  res.end();
}).listen(8000, function(){
	console.log('App listening on port 8000!')
});
