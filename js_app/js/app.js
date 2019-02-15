document.addEventListener('DOMContentLoaded', () => {

  const formSubmit = document.querySelector('#new-item-form');
  formSubmit.addEventListener('submit', handleFormSubmit);

  const deleteAll = document.querySelector('#delete-btn');
  deleteAll.addEventListener('click', handleDeleteAll);

});

const createElementWithText = (element, label, value, parentElement) => {
  const newValue = document.createElement(element);
  newValue.textContent = `${label}: ${value}`;
  parentElement.appendChild(newValue);
};

const handleFormSubmit = function(event){
  event.preventDefault();
  const listElement = document.createElement('li');

  createElementWithText('p', 'Full Name', this.full_name.value, listElement);

  createElementWithText('p', 'Scientific name', this.sci_name.value, listElement);

  createElementWithText('p', 'Species', this.species.value, listElement);

  createElementWithText('p', 'ICUN Category', this.category.value, listElement);

  createElementWithText('p', 'Continent', this.continent.value, listElement);

  const endangeredSpeciesList = document.querySelector('#endangered-species-list');
  endangeredSpeciesList.appendChild(listElement);

  this.reset();
}

const handleDeleteAll = function(event){
  const endangeredSpeciesList = document.querySelector('#endangered-species-list');
  endangeredSpeciesList.innerHTML = '';
}
