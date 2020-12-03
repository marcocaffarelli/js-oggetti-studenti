// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

$(function (){
    //Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
    var studente = {
        nome : "Marco",
        cognome : "Caffarelli",
        eta : "26"
    };
    console.log(studente);

    //Stampare a schermo attraverso il for in tutte le proprietà.
    for (var key in studente) {
        console.log(key, studente[key]);
    };

    //Creare un array di oggetti di studenti.
    var studenti = [
        {
            nome : "Francesco",
            cognome : "Totti"
        },
        {
            nome : "Daniele",
            cognome : "De Rossi"
        },
        {
            nome : "Alessandro",
            cognome : "Florenzi"
        },
        {
            nome : "Edin",
            cognome : "Dzeko"
        },
        {
            nome : "Lorenzo",
            cognome : "Pellegrini"
        }
    ]

    // Ciclare su tutti gli studenti e stampare per ognuno nome e cognome.
    for (var key in studenti) {
        console.log(key, studenti[key]);
    };

    // lista dei dati che inserisce l'utente tramite prompt
    var nomeUtente = prompt("Inserisci il tuo nome");
    var cognomeUtente = prompt("Inserisci il tuo cognome");
    var etaUtente = prompt("Inserisci la tua età");

    // oggetto studente nuovo che racchiude i prompt inseriti dall'utente 
    var studenteNuovo = {
        nome : nomeUtente,
        cognome : cognomeUtente,
        eta : etaUtente
    }
    console.log(studenteNuovo);

    // aggiunto lo studente nuovo alla lista dei studenti
    studenti.push(studenteNuovo);

    // ciclo for in per verificare se studenteNuovo è stato aggiunto alla lista studenti
    for (key in studenti) {
        console.log(key, studenti[key]);
    };
});
