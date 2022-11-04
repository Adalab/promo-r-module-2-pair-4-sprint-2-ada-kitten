const labelMesageError = document.querySelector('.js-label-error');

//Adicionar nuevo gatito
function addNewKitten(event) {
    event.preventDefault();
    const valueDesc = inputDesc.value;
    const valuePhoto = inputPhoto.value;
    const valueName = inputName.value;
    const valueRace = inputRace.value;
    const newKittenDataObject = {
      image: valuePhoto,
      name: valueName,
      desc: valueDesc,
      race: valueRace,
    };
  
    if (valueDesc === '' && valuePhoto === '' && valueName === '') {
      labelMesageError.innerHTML = 'Debe rellenar todos los valores';
    } else {
      if (valueDesc !== '' && valuePhoto !== '' && valueName !== '') {
        //que añada el gatito
        kittenDataList.push(newKittenDataObject);
        //que lo pinte
        renderKittenList(kittenDataList);
        resetDataList();
        labelMesageError.innerHTML = 'Mola! Un nuevo gatito en Adalab!';
      }
    }
  }