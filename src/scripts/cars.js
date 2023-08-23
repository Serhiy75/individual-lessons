import {
  createCars,
  updateCars,
  resetCars,
  deleteCars,
  getAllCars,
} from '../modules/cars';

const refs = {
  form: document.querySelector('.js-form'),
  form1: document.querySelector('.js-form1'),
  form2: document.querySelector('.js-form2'),
  form3: document.querySelector('.js-form3'),
  listCar: document.querySelector('.js-carList'),
};

refs.form.addEventListener('submit', onCreateFormCarSubmit);
refs.form1.addEventListener('submit', onUpdateFormCarSubmit);
refs.form2.addEventListener('submit', onResetFormCarSubmit);
refs.form3.addEventListener('submit', onDeleteFormCarSubmit);

getAllCars().then(value => {
  createMarkup(value);
});

async function onCreateFormCarSubmit(evt) {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  const car = {};
  formData.forEach((value, key) => {
    car[key] = value;
  });

  const car1 = await createCars(car);
  refs.listCar.insertAdjacentHTML('beforeend', carTemplate(car1));

  refs.form.reset();
}

async function onUpdateFormCarSubmit(evt) {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  const car = {};
  formData.forEach((value, key) => {
    if (value) car[key] = value;
  });
  const car2 = updateCars(car.id, car);
  console.log(car2);

  const oldCar = refs.listCar.querySelector(`[data-id="${car.id}"]`);
  oldCar.insertAdjacentHTML('afterend', carTemplate(car2));
  oldCar.remove();
  refs.form1.reset();
}

async function onResetFormCarSubmit(evt) {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  const car = {};
  formData.forEach((value, key) => {
    car[key] = value;
  });
  const car3 = await resetCars(car.id, car);
  console.log(car3);

  const oldCar = refs.listCar.querySelector(`[data-id="${car.id}"]`);
  oldCar.insertAdjacentHTML('afterend', carTemplate(car3));
  oldCar.remove();
  refs.form2.reset();
}

async function onDeleteFormCarSubmit(evt) {
  evt.preventDefault();
  const inputDeleteCar = refs.form3.elements.id.value;
  const car4 = await deleteCars(inputDeleteCar);
  console.log(car4);

  const oldCar = refs.listCar.querySelector(`[data-id="${inputDeleteCar}"]`);
  oldCar.remove();
  refs.form3.reset();
}
function createMarkup(cars) {
  const markup = cars.map(carTemplate).join('');
  refs.listCar.innerHTML = markup;
}

const carTemplate = ({ id, model, marka, year, price }) => {
  return `
            <li data-id="${id}" class="book">
        <h3>${model}</h3>
        <h4>${marka}</h4>
        <p>${year}</p>
        <p>${price}</p>
        <p>${id}</p>
      </li>`;
};
