/* function that responses to click on menu_item with returning the id of the menu_item */
id_ausgaben = "home";
$(document).ready(function() { $(".ausgabenkategorie").click(function(){
  id_ausgaben = $(this).attr("id");
  console.log(id_ausgaben);
  })
  })


/* function that responses to click on menu_item with returning the id of the menu_item */
id_einnahmen = "work"
$(document).ready(function() { $(".einnahmenkategorie").click(function(){
  id_einnahmen = $(this).attr("id");
  console.log(id_einnahmen);
  })
  })


/* Functions to add incomes and summarize them, including a display for the sum */

function addEinnahme() {

  einnahmenliste.innerHTML += `<li class="mdl-list__item list_margin_left">
    
    <i class="material-icons mdl-list__item-avatar icon_in_list_layout" style="color: white; background:none;">
      ${id_einnahmen}
    </i>
    <div >
      <div class="mdl-list__item mdl-list__item-primary-content mdl_list_primary_alignment" style="color: white";>
        ${einnahme.value}
      </div>
      <div class="mdl-list__item-primary-content mdl_list_primary_alignment_value value_in_list" style="color: white";>
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
    
  <i class="material-icons mdl-list__item-avatar icon_in_list_layout" style="color: white; background:none;">
    ${id_ausgaben}
  </i>
  <div >
    <div class="mdl-list__item mdl-list__item-primary-content mdl_list_primary_alignment" style="color: white;">
      ${ausgabe.value}
    </div>
    <div class="mdl-list__item-primary-content mdl_list_primary_alignment_value value_in_list" style="color: white";>
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

/* Function to check the value of saldo and changes the color regarding if the value is smaller or bigger than 0 */

var value = 0;

function checkValue() {

  value = document.getElementById("einnahmen_displaySaldo").value

  if (value < 0)
   document.getElementById("einnahmen_displaySaldo").style = "color: red;"
  else if (value > 0)
   document.getElementById("einnahmen_displaySaldo").style = "color: green;"
  else
   document.getElementById("einnahmen_displaySaldo").style = "color: rgb(48, 48, 48);"
    
   value = document.getElementById("ausgaben_displaySaldo").value

   if (value < 0)
    document.getElementById("ausgaben_displaySaldo").style = "color: red;"
   else if (value > 0)
    document.getElementById("ausgaben_displaySaldo").style = "color: green;"
   else
    document.getElementById("ausgaben_displaySaldo").style = "color: rgb(48, 48, 48);"

}


