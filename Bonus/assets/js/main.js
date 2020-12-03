$(function (){
    //Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
    var studente = {
        Nome : "Marco",
        Cognome : "Caffarelli",
        Età : "26"
    };
    //console.log(studente);

    //Stampare a schermo attraverso il for in tutte le proprietà.
    for (var key in studente) {
        //console.log(key, studente[key]);
        //stamapa in html tramite javascript
        document.getElementById('singolo').innerHTML += key + ": " + studente[key] + '<br>';
        };

    //Creare un array di oggetti di studenti.
    var studenti = [
        {
            Nome : "Francesco",
            Cognome : "Totti",
            Età : 44
        },
        {
            Nome : "Daniele",
            Cognome : "De Rossi",
            Età : 37
        },
        {
            Nome : "Alessandro",
            Cognome : "Florenzi",
            Età : 29
        },
        {
            Nome : "Edin",
            Cognome : "Dzeko",
            Età : 34
        },
        {
            Nome : "Lorenzo",
            Cognome : "Pellegrini",
            Età : 24
        }
    ]

    // Ciclare su tutti gli studenti e stampare per ognuno nome e cognome.
    //for (var key in studenti) {
        //console.log(key, studenti[key]); 
    //};

    // ciclo for per stamapre gli oggetti dell'array nell'html
    for (var i = 0; i < studenti.length; i++) {
        //console.log(studenti[i]); 
        document.getElementById('lista').innerHTML += '<li>' + 'Nome: ' + studenti[i].Nome + '<br>' + 'Cognome: ' + studenti[i].Cognome + '<br>' + 'Età: ' + studenti[i].Età + '<br>' + '</li>'; 
    };



    // lista dei dati che inserisce l'utente tramite prompt
    var nomeUtente = prompt("Inserisci il tuo nome");
    var cognomeUtente = prompt("Inserisci il tuo cognome");
    var etaUtente = Number(prompt("Inserisci la tua età"));

    // oggetto studente nuovo che racchiude i prompt inseriti dall'utente 
    var studenteNuovo = {
        Nome : nomeUtente,
        Cognome : cognomeUtente,
        Età : etaUtente
    }
    //console.log(studenteNuovo);
    for (var key in studenteNuovo) {
        document.getElementById('utente').innerHTML += key + ": " + studenteNuovo[key] + '<br>';
    };

});
