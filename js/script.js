// Interazione utente

const nome = prompt("Inserisci il tuo nome");

const cognome = prompt("Inserisci il tuo cognome");

const colore = prompt("Inserisci il tuo colore preferito");


// modifico l'html con i dati dell'utente
document.getElementById('nome').innerHTML = nome;

document.getElementById('cognome').innerHTML = cognome;

document.getElementById('colore').innerHTML = colore;


// creazione password

let password = nome + cognome + colore + "21";

// controllo se l'utente ha inserito i dati richiesti
if(nome && cognome && colore){
    // modifico l'html con la password dell'utente
    document.getElementById('password').innerHTML = password;
}

else {
    // modifico l'html indicando all'utente di inserire i dati
    document.getElementById('password').innerHTML = "Ricaricare la pagina ed inserisci i dati richiesti";
}
