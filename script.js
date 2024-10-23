// cerchiamo nel documento l'id myForm, gli aggiungiamo un avento al submit del pulsante che attiva la funzione
document.getElementById("myForm").addEventListener("submit", function (event) {
  // variabili
  const userAge = parseInt(document.getElementById("age").value);
  const userKm = parseInt(document.getElementById("km").value);
  const kmPrice = userKm * 0.21;
  const scontoMinorenni = (kmPrice * 20) / 100;
  const bigliettoIntero = kmPrice * 1;
  const scontoAnziani = (kmPrice * 40) / 100;
  let message = "";

  // svolgimento

  if (userAge < 18) {
    prezzoFinale = kmPrice - scontoMinorenni;
    message = `L'importo da pagare per te corrisponde a ${prezzoFinale.toFixed(
      2
    )} €`;
  } else if (userAge < 65 && userAge > 17) {
    prezzoFinale = bigliettoIntero;
    message = `L'importo da pagare per te corrisponde a ${prezzoFinale.toFixed(
      2
    )} €`;
  } else {
    prezzoFinale = kmPrice - scontoAnziani;
    message = `L'importo da pagare per te corrisponde a ${prezzoFinale.toFixed(
      2
    )} €`;
  }
  console.log(userAge);
  console.log(userKm);
  console.log();
  // selezioniamo result dall'html e gli inviamo il contenuto di message
  document.getElementById("result").innerText = message;
});
