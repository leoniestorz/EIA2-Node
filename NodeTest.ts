console.log("Server starting");

import Http = require("http");
import Url = require("url");

interface AssocStringString {
    [key: string]: string;
}

let port: number = process.env.PORT;
if (port == undefined)
    port = 8100;

let server: Http.Server = Http.createServer();
server.addListener("listening", handleListen);
server.addListener("request", handleRequest);
server.listen(port);

function handleListen(): void {
    console.log("Listening on port: " + port);
}

function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    console.log("Request received");

    console.log(_request.url);
    let query: AssocStringString = Url.parse(_request.url, true).query;
    console.log(query);
    let key: string;
    for (key in query)
        console.log(key + ":" + query[key]);

    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.write("Hallo!" + query["Vorname"] + "\n" +  "Vielen Dank für Ihre Bestellung! Folgendes wird für zusammengestellt:"); 
   
    _response.write("Vanille: " + query["Vanille"] + "\n");
    _response.write("Schokolade: " + query["Schokolade"] + "\n");
    _response.write("Erdbeere: " + query["Erdbeere"] + "\n");
    _response.write("Cookies: " + query["Cookies"] + "\n");
    _response.write("Mango: " + query["Mango"] + "\n");
    _response.write("Himbeere: " + query["Himbeere"] + "\n");
    _response.write("Haselnuss: " + query["Haselnuss"] + "\n");
    _response.write("Straciatella: " + query["Straciatella"] + "\n");
    _response.write("Nougat: " + query["Nougat"] + "\n");
    _response.write("Kirsche: " + query["Kirsche"] + "\n");
    _response.write("Joghurt: " + query["Joghurt"] + "\n");
    
    _response.write("Behälter: " + query["Behaelter"] + "\n");
    _response.write("Ihre Bestellung wird geliefert an: " + query["Vorname"] + "\n" + query["Nachname"] + "\n" + query["Ort"]);
    
    for (key in query){
       _response.write(key + ":" + query[key]);
   }
    _response.end();
}