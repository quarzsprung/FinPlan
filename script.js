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

var myArray = [];
var sum = 0;

function addtoArray() {

  var test = parseInt(document.getElementById("einnahmebetrag").value);
  myArray.push(test);

  sum = myArray.reduce((a, b) => a + b, 0);
  console.log(sum);

  document.getElementById("displayEinnahmen").value = sum;
}


/* Functions to add outcomes and summarize them, including a display for the sum */

function addAusgabe() {

  ausgabenliste.innerHTML += `<li class="mdl-list__item">
    <span class="mdl-list__item mdl-list__item-primary-content mdl_list_primary_alignment">
      <i class="material-icons  mdl-list__item-avatar">add_circle_outline</i>
      ${ausgabe.value}
    </span>
    <span class="mdl-list__item-primary-content mdl_list_secondary_alignment">
      <i class="material-icons  mdl-list__item-avatar">euro</i>
      ${ausgabebetrag.value}
    </span>
  </li>`
}

var myAusgabenArray = [];
var ausgabensum = 0;

function addtoAusgabenArray() {

  var ausgabetest = parseInt(document.getElementById("ausgabebetrag").value);
  myAusgabenArray.push(ausgabetest);

  ausgabensum = myAusgabenArray.reduce((c, d) => c + d, 0);
  console.log(ausgabensum);

  document.getElementById("displayAusgaben").value = ausgabensum;
}