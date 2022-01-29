/* Functions to add incomes and summarize them, including a display for the sum */

function addEinnahme() {

  einnahmenliste.innerHTML += `<li class="mdl-list__item">
    <span class="mdl-list__item mdl-list__item-primary-content mdl_list_primary_alignment">
      <i class="material-icons  mdl-list__item-avatar">add_circle_outline</i>
      ${einnahme.value}
    </span>
    <span class="mdl-list__item-primary-content mdl_list_secondary_alignment">
      <i class="material-icons  mdl-list__item-avatar">euro</i>
      ${einnahmebetrag.value}
    </span>
  </li>`
}

var myEinnahmenArray = [];
var sum_Einnahmen = 0;

function addtoEinnahmenArray() {

  var einnahme = parseInt(document.getElementById("einnahmebetrag").value);
  myEinnahmenArray.push(einnahme);

  sum_Einnahmen = myEinnahmenArray.reduce((a, b) => a + b, 0);

  document.getElementById("displayEinnahmen").value = sum_Einnahmen;
}


/* Functions to add outcomes and summarize them, including a display for the sum */

function addAusgabe() {

  ausgabenliste.innerHTML += `<li class="mdl-list__item">
    <span class="mdl-list__item mdl-list__item-primary-content mdl_list_primary_alignment">
      <i class="material-icons  mdl-list__item-avatar">remove_circle_outline</i>
      ${ausgabe.value}
    </span>
    <span class="mdl-list__item-primary-content mdl_list_secondary_alignment">
      <i class="material-icons  mdl-list__item-avatar">euro</i>
      ${ausgabebetrag.value}
    </span>
  </li>`
}

var myAusgabenArray = [];
var sum_Ausgaben = 0;

function addtoAusgabenArray() {

  var ausgabe = parseInt(document.getElementById("ausgabebetrag").value);
  myAusgabenArray.push(ausgabe);

  sum_Ausgaben = myAusgabenArray.reduce((c, d) => c + d, 0);

  document.getElementById("displayAusgaben").value = sum_Ausgaben;
}

/* Function to display the overall saldo */

var saldo = 0;
var display_einnahme = 0;
var display_ausgabe = 0;

function displaySaldo() {

  var display_einnahme = document.getElementById("displayEinnahmen").value;
  var display_ausgabe = document.getElementById("displayAusgaben").value;

  var saldo = display_einnahme - display_ausgabe;

  document.getElementById("einnahmen_displaySaldo").value = saldo;
  document.getElementById("ausgaben_displaySaldo").value = saldo;
}