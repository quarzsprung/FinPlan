/* Functions to add incomes and summarize them, including a display for the sum */

function addEinnahme() {

  einnahmenliste.innerHTML += `<li class="mdl-list__item list_margin_left">
    
    <div class="material-icons mdl-list__item-avatar icon_in_list_layout">add_circle_outline </div>
    <div >
      <div class="mdl-list__item mdl-list__item-primary-content mdl_list_primary_alignment">
        ${einnahme.value}
      </div>
      <div class="mdl-list__item-primary-content mdl_list_primary_alignment_value value_in_list">
        ${einnahmebetrag.value}
      </div>
    </div>
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

  ausgabenliste.innerHTML += `<li class="mdl-list__item list_margin_left">
    
  <div class="material-icons mdl-list__item-avatar icon_in_list_layout">remove_circle_outline</div>
  <div >
    <div class="mdl-list__item mdl-list__item-primary-content mdl_list_primary_alignment">
      ${ausgabe.value}
    </div>
    <div class="mdl-list__item-primary-content mdl_list_primary_alignment_value value_in_list">
      ${ausgabebetrag.value}
    </div>
  </div>
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