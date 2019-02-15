document.addEventListener('DOMContentLoaded', () => {

  const formSubmit = document.querySelector('#new-item-form');
  formSubmit.addEventListener('submit', handleFormSubmit);

  const deleteAll = document.querySelector('#delete-btn');
  deleteAll.addEventListener('click', handleDeleteAll);

});

const createElementWithText = (element, value, parentElement) => {
  const newValue = document.createElement(element);
  newValue.textContent = value;
  parentElement.appendChild(newValue);
}

const handleFormSubmit = function(event){
  event.preventDefault();
  const listElement = document.createElement('li');

  createElementWithText('p', this.name.value, listElement);

  const name = document.createElement('p');
  name.textContent = this.name.value;
  listElement.appendChild(name);

  const sci_name = document.createElement('p');
  sci_name.textContent = this.sci_name.value;
  listElement.appendChild(sci_name);

  const species = document.createElement('p');
  species.textContent = this.species.value;
  listElement.appendChild(species);

  const population = document.createElement('p');
  population.textContent = this.population.value;
  listElement.appendChild(population);

  const continent = document.createElement('p');
  continent.textContent = this.continent.value;
  listElement.appendChild(continent);

  const endangeredSpeciesList = document.querySelector('#endangered-species-list');
  endangeredSpeciesList.appendChild(listElement);

  this.reset();
}

const handleDeleteAll = function(event){
  const endangeredSpeciesList = document.querySelector('#endangered-species-list');
  endangeredSpeciesList.innerHTML = '';
}
