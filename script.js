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
    </li>`;
}

function addAusgabe() {

    einnahmenliste.innerHTML += `<li class="mdl-list__item">
      <span class="mdl-list__item-primary-content">
        <i class="material-icons  mdl-list__item-avatar">add_circle_outline</i>
        ${ausgabe.value}
      </span>
      <span class="mdl-list__item-primary-content">
        <i class="material-icons  mdl-list__item-avatar">euro</i>
        ${ausgabebetrag.value}
      </span>
    </li>`;
}