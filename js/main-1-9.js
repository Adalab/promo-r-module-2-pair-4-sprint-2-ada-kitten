const listElement = document.querySelector('.js-list');


//Filtrar por descripción
function filterKitten(event) {
    event.preventDefault();
    const descrSearchText = input_search_desc.value.toLowerCase();
    listElement.innerHTML = '';
    const kittenDataFilter = kittenDataList
    .filter((kitten) => kitten.desc.toLowerCase().includes(descrSearchText))
    .map((kitten) =>listElement.innerHTML += renderKitten(kitten ));
   /*  for (const kittenItem of kittenDataList) {
      if (kittenItem.desc.includes(descrSearchText)) {
        listElement.innerHTML += renderKitten(kittenItem);
      }
    } */
  
  }