namespace FormElements {
    window.addEventListener("load", init);

//Auswahl gespeichert in Arrays
    let eissorten: string[] = ["Vanille", "Schokolade", "Erdbeere", "Cookies", "Mango", "Himbeere", "Haselnuss", "Straciatella", "Nougat", "Kirsche", "Joghurt"];
    let toppings: string[] = ["Sahne", "Schokostreusel", "Bunte Streusel", "Kokosraspeln", "Erdbeersosse", "Schokososse"];
    let behaelter: string[] = ["Waffel", "Becher"];
//Arrays f�r die Inputs
    let eisInput: HTMLInputElement[] = [];
    let toppingsInput: HTMLInputElement[] = [];
    let behaelterInput: HTMLInputElement[] = []; 
//HTMLElemente f�r die Inputs          
    let Eissorten: HTMLElement;
    let Toppings: HTMLElement;
    let Behaelter: HTMLElement;   
    let Bestellung: HTMLElement;
    let Button: HTMLElement;

    function init(): void {
        
        Eissorten = document.getElementById("Eissorten");
        Toppings = document.getElementById("Toppings");
        Behaelter = document.getElementById("Behaelter");
        Bestellung = document.getElementById("Bestellung");
        Button = document.getElementById("Button");

//aufruf der Funktion zur Erstellung der verschiedenen Inputs
        createInputs();
        
        Eissorten.addEventListener("change", change);
        Toppings.addEventListener("change", change);
        Behaelter.addEventListener("change", change);
        Button.addEventListener("click", DatenPruefen);}

//Erstellen von Inputs f�r Eissorten (Counter), Toppings (Checkbox) und Behaelter(RadioButton)
        
    function createInputs(): void {
       
        for (let i: number = 0; i < eissorten.length; i++) {
            createCounter(eissorten[i]);
        }
        for (let i: number = 0; i < toppings.length; i++) {
            createCheckbox(toppings[i]);
        }
        for (let i: number = 0; i < behaelter.length; i++) {
            createRadio(behaelter[i]);
        }
    }

//Einzelne Funktionen um jeweilige Inputs (Counter, Checkbox, Radio) zu ertsellen
    
    function createCounter(_eis: string): void {
      
        let input: HTMLInputElement = document.createElement("input");
        let label: HTMLLabelElement = document.createElement("label");
        

        label.innerText = _eis;
        label.appendChild(input);
        input.type = "number";
        input.min = "0";
        input.value = "0";


        Eissorten.appendChild(label);
        eisInput.push(input);
    }

    function createCheckbox(_topping: string): void {
       
        let input: HTMLInputElement = document.createElement("input");
        let label: HTMLLabelElement = document.createElement("label");
        

        label.innerText = _topping;
        label.appendChild(input);
        input.type = "checkbox";
     
        
        Toppings.appendChild(label);
        toppingsInput.push(input);
    }

    function createRadio(_behaelter: string): void {
        
        let input: HTMLInputElement = document.createElement("input");
        let label: HTMLLabelElement = document.createElement("label");
     

        label.innerText = _behaelter;
        label.appendChild(input);
        input.type = "radio";
        input.required = true;
       

        Behaelter.appendChild(label);
        behaelterInput.push(input);
    }     
    

//Veraenderung bei Wahl der Eissorte(n) und Toppings 
    
    function change(): void {
        let summe: number = 0;
        for (let i: number = 0; i < eisInput.length; i++) {
            summe += parseInt(eisInput[i].value);
        }
        for (let i: number = 0; i < toppingsInput.length; i++) {
            if(toppingsInput[i].checked)
            {summe += 0.5;}
        }
        
        
        BestellungAnzeigen(summe);

    }
    
    function BestellungAnzeigen(_summe: number): void {

        document.getElementById("Eissortenwahl").innerText = "";
        document.getElementById("Toppingwahl").innerText = "";
        document.getElementById("Behaelterwahl").innerText = "";
        
        for (let i: number = 0; i < eisInput.length; i++) {
            if (parseInt(eisInput[i].value) > 0) {
               document.getElementById("Eissortenwahl").innerText += eissorten[i] + " " + ": " + (parseInt(eisInput[i].value) * 1) + "\n";
            }
}
        for (let i: number = 0; i < toppingsInput.length; i++) {
            if(toppingsInput[i].checked)
            {
                document.getElementById("Toppingwahl").innerText += toppings[i] + " 0.50 Euro" + "\n";
            }
        }
        for (let i: number = 0; i < behaelterInput.length; i++) {
            if(behaelterInput[i].checked)
            {
                document.getElementById("Behaelterwahl").innerText += behaelter[i]  + "\n";
            }
        }    
        
        //Anzeigen der Gesamtsumme
        
        document.getElementById("Summe").innerText = _summe.toString() + " Euro";   
}    
    

//Bei Klick aug den Button werdne die eingegeben Daten ueberprueft und Feebdack gegeben
        
   function DatenPruefen(): void {
       
        let Vorname = <HTMLInputElement> document.getElementById("Vorname");
        let Nachname= <HTMLInputElement> document.getElementById("Nachname");
        let Mail = <HTMLInputElement> document.getElementById("Mail");
        let Telefon = <HTMLInputElement> document.getElementById("Telefon");
        let Strasse = <HTMLInputElement> document.getElementById("Strasse");
        let PLZ = <HTMLInputElement> document.getElementById("PLZ");
        let Ort= <HTMLInputElement> document.getElementById("Ort");
        let Land = <HTMLInputElement> document.getElementById("Land");

        let ungueltig: string[] = [];
       
         if(Vorname.validity.valid != true)
            ungueltig.push("Vorname");
        if (Nachname.validity.valid != true)
            ungueltig.push("Nachname");
        if (Mail.validity.valid != true)
            ungueltig.push("Mail");
        if (Strasse.validity.valid != true)
            ungueltig.push("Strasse");
        if (PLZ.validity.valid != true)
            ungueltig.push("PLZ");
        if (Ort.validity.valid != true)
            ungueltig.push("Ort");
        if (Telefon.validity.valid != true)
            ungueltig.push("Telefon");
        if (Land.validity.valid != true)
            ungueltig.push("Land");
        else {
            alert("Ihre Angaben bei " + ungueltig + " sind ungueltig. Bitte pruefen Sie diese erneut!");
        }
  
    }

    
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
    _response.write("Ich h�re Stimmen!");
    _response.end();
}
    
}
    