var FormElements;
(function (FormElements) {
    window.addEventListener("load", init);
    //Auswahl gespeichert in Arrays
    var eissorten = ["Vanille", "Schokolade", "Erdbeere", "Cookies", "Mango", "Himbeere", "Haselnuss", "Straciatella", "Nougat", "Kirsche", "Joghurt"];
    var toppings = ["Sahne", "Schokostreusel", "Bunte Streusel", "Kokosraspeln", "Erdbeersosse", "Schokososse"];
    var behaelter = ["Waffel", "Becher"];
    //Arrays f�r die Inputs
    var eisInput = [];
    var toppingsInput = [];
    var behaelterInput = [];
    //HTMLElemente f�r die Inputs          
    var Eissorten;
    var Toppings;
    var Behaelter;
    var Bestellung;
    var Button;
    function init() {
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
        Button.addEventListener("click", DatenPruefen);
    }
    //Erstellen von Inputs f�r Eissorten (Counter), Toppings (Checkbox) und Behaelter(RadioButton)
    function createInputs() {
        for (var i = 0; i < eissorten.length; i++) {
            createCounter(eissorten[i]);
        }
        for (var i = 0; i < toppings.length; i++) {
            createCheckbox(toppings[i]);
        }
        for (var i = 0; i < behaelter.length; i++) {
            createRadio(behaelter[i]);
        }
    }
    //Einzelne Funktionen um jeweilige Inputs (Counter, Checkbox, Radio) zu ertsellen
    function createCounter(_eis) {
        var input = document.createElement("input");
        var label = document.createElement("label");
        label.innerText = _eis;
        label.appendChild(input);
        input.type = "number";
        input.min = "0";
        input.value = "0";
        Eissorten.appendChild(label);
        eisInput.push(input);
    }
    function createCheckbox(_topping) {
        var input = document.createElement("input");
        var label = document.createElement("label");
        label.innerText = _topping;
        label.appendChild(input);
        input.type = "checkbox";
        Toppings.appendChild(label);
        toppingsInput.push(input);
    }
    function createRadio(_behaelter) {
        var input = document.createElement("input");
        var label = document.createElement("label");
        label.innerText = _behaelter;
        label.appendChild(input);
        input.type = "radio";
        input.required = true;
        Behaelter.appendChild(label);
        behaelterInput.push(input);
    }
    //Veraenderung bei Wahl der Eissorte(n) und Toppings 
    function change() {
        var summe = 0;
        for (var i = 0; i < eisInput.length; i++) {
            summe += parseInt(eisInput[i].value);
        }
        for (var i = 0; i < toppingsInput.length; i++) {
            if (toppingsInput[i].checked) {
                summe += 0.5;
            }
        }
        BestellungAnzeigen(summe);
    }
    function BestellungAnzeigen(_summe) {
        document.getElementById("Eissortenwahl").innerText = "";
        document.getElementById("Toppingwahl").innerText = "";
        document.getElementById("Behaelterwahl").innerText = "";
        for (var i = 0; i < eisInput.length; i++) {
            if (parseInt(eisInput[i].value) > 0) {
                document.getElementById("Eissortenwahl").innerText += eissorten[i] + " " + ": " + (parseInt(eisInput[i].value) * 1) + "\n";
            }
        }
        for (var i = 0; i < toppingsInput.length; i++) {
            if (toppingsInput[i].checked) {
                document.getElementById("Toppingwahl").innerText += toppings[i] + " 0.50 Euro" + "\n";
            }
        }
        for (var i = 0; i < behaelterInput.length; i++) {
            if (behaelterInput[i].checked) {
                document.getElementById("Behaelterwahl").innerText += behaelter[i] + "\n";
            }
        }
        //Anzeigen der Gesamtsumme
        document.getElementById("Summe").innerText = _summe.toString() + " Euro";
    }
    //Bei Klick aug den Button werdne die eingegeben Daten ueberprueft und Feebdack gegeben
    function DatenPruefen() {
        var Vorname = document.getElementById("Vorname");
        var Nachname = document.getElementById("Nachname");
        var Mail = document.getElementById("Mail");
        var Telefon = document.getElementById("Telefon");
        var Strasse = document.getElementById("Strasse");
        var PLZ = document.getElementById("PLZ");
        var Ort = document.getElementById("Ort");
        var Land = document.getElementById("Land");
        var ungueltig = [];
        if (Vorname.validity.valid != true)
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
})(FormElements || (FormElements = {}));
//# sourceMappingURL=aufgabe10.js.map