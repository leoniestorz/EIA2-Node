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
    let query = Url.parse(_request.url, true).query;
    console.log(query);
    let key;
    for (key in query)
        console.log(key + ":" + query[key]);
    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.write("Hallo!" + query["Vorname"] + "<br>" + "<br>" + "Vielen Dank fuer Ihre Bestellung! Folgendes wird fuer Sie zusammengestellt:" + "<br>" + "<br>");
    _response.write("Vanille: " + query["Vanille"] + "<br>");
    _response.write("Schokolade: " + query["Schokolade"] + "<br>");
    _response.write("Erdbeere: " + query["Erdbeere"] + "<br>");
    _response.write("Cookies: " + query["Cookies"] + "<br>");
    _response.write("Mango: " + query["Mango"] + "<br>");
    _response.write("Himbeere: " + query["Himbeere"] + "<br>");
    _response.write("Haselnuss: " + query["Haselnuss"] + "<br>");
    _response.write("Straciatella: " + query["Straciatella"] + "<br>");
    _response.write("Nougat: " + query["Nougat"] + "<br>");
    _response.write("Kirsche: " + query["Kirsche"] + "<br>");
    _response.write("Joghurt: " + query["Joghurt"] + "<br>");
    _response.write("Toppings: " + query["Toppings"] + "<br>");
    _response.write("Behaelter: " + query["Behaelter"] + "<br>");
    _response.write("Art der Lieferung: " + query["Lieferung"] + "<br>");
    _response.write("<br>" + "Ihre Bestellung wird geliefert an:" + "<br>" + "<br>" + query["Vorname"] + "<br>" + query["Nachname"] + "<br>" + query["Ort"]);
    for (key in query) {
        _response.write(key + ":" + query[key]);
    }
    _response.end();
}
//# sourceMappingURL=NodeTest.js.map