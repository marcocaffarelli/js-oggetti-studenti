$(function (){
    //Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
    var capitano = {
        Nome : "Edin",
        Cognome : "Dzeko",
        Numero : "9"
    };
    //console.log(studente);

    //Stampare a schermo attraverso il for in tutte le proprietà.
    for (var key in capitano) {
        //console.log(key, studente[key]);
        //stamapa in html tramite javascript
        document.getElementById('singolo').innerHTML += key + ": " + capitano[key] + '<br>';
        };

    //Creare un array di oggetti di studenti.
    var formazione = [
        {
            Nome : "Antonio",
            Cognome : "Mirante",
            Numero : 83
        },
        {
            Nome : "Chris",
            Cognome : "Smalling",
            Numero : 6
        },
        {
            Nome : "Roger",
            Cognome : "Ibanez",
            Numero : 3
        },
        {
            Nome : "Gianluca",
            Cognome : "Mancini",
            Numero : 23
        },
        {
            Nome : "Jordan",
            Cognome : "Veretout",
            Numero : 17
        },
        {
            Nome : "Lorenzo",
            Cognome : "Pellegrini",
            Numero : 7
        },
        {
            Nome : "Leonardo",
            Cognome : "Spinazzola",
            Numero : 37
        },
        {
            Nome : "Rick",
            Cognome : "Karsdorp",
            Numero : 2
        },
        {
            Nome : "Pedro",
            Cognome : "Rodriguez",
            Numero : 11
        },
        {
            Nome : "Henrikh",
            Cognome : "Mkhitaryan",
            Numero : 77
        }
        
    ]

    // Ciclare su tutti gli studenti e stampare per ognuno nome e cognome.
    //for (var key in studenti) {
        //console.log(key, studenti[key]); 
    //};

    // ciclo for per stamapre gli oggetti dell'array nell'html
    for (var i = 0; i < formazione.length; i++) {
        //console.log(studenti[i]); 
        document.getElementById('lista').innerHTML += '<li>' + 'Nome: ' + formazione[i].Nome + '<br>' + 'Cognome: ' + formazione[i].Cognome + '<br>' + 'Numero: ' + formazione[i].Numero + '<br>' + '</li>'; 
    };



    // lista dei dati che inserisce l'utente tramite prompt
    var nomeUtente = prompt("Inserisci il tuo nome");
    var cognomeUtente = prompt("Inserisci il tuo cognome");
    var etaUtente = Number(prompt("Inserisci la tua età"));

    // oggetto studente nuovo che racchiude i prompt inseriti dall'utente 
    var Allenatore = {
        Nome : nomeUtente,
        Cognome : cognomeUtente,
        Età : etaUtente
    }
    //console.log(studenteNuovo);
    for (var key in Allenatore) {
        document.getElementById('utente').innerHTML += key + ": " + Allenatore[key] + '<br>';
    };

});
