"use strict";
console.log("Server starting");
const Http = require("http");
const Url = require("url");
let port = process.env.PORT;
if (port == undefined)
    port = 8100;
let server = Http.createServer();
server.addListener("listening", handleListen);
server.addListener("request", handleRequest);
server.listen(port);
function handleListen() {
    console.log("Listening on port: " + port);
}
function handleRequest(_request, _response) {
    console.log("Request received");
    console.log(_request.url);
    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    let query = Url.parse(_request.url, true).query;
    console.log(query);
    let key;
    for (key in query) {
        console.log(key + ":" + query[key]);
    }
    _response.write("Hallo " + query["Vorname"] + " danke f�r deine Bestellung" + "<br>" + "Deine Eisauswahl:" + "<br>");
    _response.write("Schoko: " + query["Schoko"] + "<br>");
    _response.write("Erdbeer: " + query["Erdbeer"] + "<br>");
    _response.write("Haselnuss: " + query["Haselnuss"] + "<br>");
    _response.write("Vanille: " + query["Vanille"] + "<br>");
    _response.write("Banane: " + query["Banane"] + "<br>");
    //    _response.write("Deine Toppingauswahl:" + "<br>" + query["Erdbeerso�e"] + "<br>");
    //   
    //    _response.write(" " + query["Streusel"] + "<br>");
    //    _response.write(" " + query["Sahne"] + "<br>");
    //    _response.write(" " + query["Schokoso�e"] + "<br>");
    //    
    //    _response.write("Deine Toppingsauswahl " + query["toppings2"] + "<br>");
    _response.write("Deine Beh�lterauswahl:" + "<br>" + query["container"] + "<br>");
    _response.write("Die Bestellung geht an:" + "<br>" + query["Vorname"] + " " + query["Name"] + " " + query["Stra�e"] + " " + query["Postleitzahl"] + " " + query["Ort"] + "<br>");
    _response.end();
}
//# sourceMappingURL=NodeTest.js.map