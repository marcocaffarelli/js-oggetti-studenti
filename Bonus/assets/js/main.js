$(function (){
    //Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
    var studente = {
        Nome : "Marco",
        Cognome : "Caffarelli",
        Eta : "26"
    };
    console.log(studente);

    //Stampare a schermo attraverso il for in tutte le proprietà.
    for (var key in studente) {
        console.log(key, studente[key]);
        //stamapa in html tramite javascript
        document.getElementById('singolo').innerHTML += key + ": " + studente[key] + '<br>';
        };

    //Creare un array di oggetti di studenti.
    var studenti = [
        {
            Nome : "Francesco",
            Cognome : "Totti",
            Eta : 44
        },
        {
            Nome : "Daniele",
            Cognome : "De Rossi",
            Eta : 37
        },
        {
            Nome : "Alessandro",
            Cognome : "Florenzi",
            Eta : 29
        },
        {
            Nome : "Edin",
            Cognome : "Dzeko",
            Eta : 34
        },
        {
            Nome : "Lorenzo",
            Cognome : "Pellegrini",
            Eta : 24
        }
    ]

    // Ciclare su tutti gli studenti e stampare per ognuno nome e cognome.
    for (var key in studenti) {
        //console.log(key, studenti[key]);
        
    };
    for (var i = 0; i < studenti.length; i++) {
        console.log(studenti[i]);
        document.getElementById('lista').innerHTML += studenti[i]; 
    }

    // lista dei dati che inserisce l'utente tramite prompt
    /*var nomeUtente = prompt("Inserisci il tuo nome");
    var cognomeUtente = prompt("Inserisci il tuo cognome");
    var etaUtente = Number(prompt("Inserisci la tua età"));

    // oggetto studente nuovo che racchiude i prompt inseriti dall'utente 
    var studenteNuovo = {
        nome : nomeUtente,
        cognome : cognomeUtente,
        eta : etaUtente
    }
    //console.log(studenteNuovo);

    // aggiunto lo studente nuovo alla lista dei studenti
    studenti.push(studenteNuovo);

    // ciclo for in per verificare se studenteNuovo è stato aggiunto alla lista studenti
    for (key in studenti) {
        //console.log(key, studenti[key]);
    };*/
});
