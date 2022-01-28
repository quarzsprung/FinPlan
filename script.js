function addEinnahme() {

  einnahmenliste.innerHTML += `<li class="mdl-list__item">
    <span class="mdl-list__item-primary-content">
      <i class="material-icons  mdl-list__item-avatar">add_circle_outline</i>
      ${einnahme.value}
    </span>
    <span class="mdl-list__item-primary-content">
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
  console.log(myArray);

  sum = myArray.reduce((a, b) => a + b, 0);
  console.log(sum);

  document.getElementById("displayEinnahmen").value = sum;
}

