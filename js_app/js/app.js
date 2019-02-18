document.addEventListener('DOMContentLoaded', () => {

  const formSubmit = document.querySelector('#new-item-form');
  formSubmit.addEventListener('submit', handleFormSubmit);

  const deleteAll = document.querySelector('#delete-btn');
  deleteAll.addEventListener('click', handleDeleteAll);

});

const createElementWithText = (tag, label, text, parentElement) => {
  const newValue = document.createElement(tag);
  newValue.textContent = `${label} ${text}`;
  parentElement.appendChild(newValue);
  return newValue;
};

const handleFormSubmit = function(event){
  event.preventDefault();

  const listElement = createElementWithText('li', '', '', document.querySelector('#endangered-species-list'))

  createElementWithText('p', 'Name:', this.full_name.value, listElement);
  createElementWithText('p', 'Scientific name:', this.sci_name.value, listElement);
  createElementWithText('p', 'Species', this.species.value, listElement);
  createElementWithText('p', 'ICUN Category:', this.category.value, listElement);
  createElementWithText('p', 'Continent:', this.continent.value, listElement);

  document.querySelector('#endangered-species-list').appendChild(listElement);

  this.reset();
}

const handleDeleteAll = function(event){
  const endangeredSpeciesList = document.querySelector('#endangered-species-list');
  endangeredSpeciesList.innerHTML = '';
}
