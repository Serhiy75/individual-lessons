

import {
    createCars, updateCars,
    resetCars, deleteCars, getAllCars
} from '../modules/cars'

const refs = {
    form: document.querySelector('.js-form'),
    form1: document.querySelector('.js-form1'),
    form2: document.querySelector('.js-form2'),
    form3: document.querySelector('.js-form3'),
    listCar: document.querySelector('.js-carList')
};

refs.form.addEventListener('submit', onCreateFormCarSubmit);
refs.form1.addEventListener('submit', onUpdateFormCarSubmit);
refs.form2.addEventListener('submit', onResetFormCarSubmit);
refs.form3.addEventListener('submit', onDeleteFormCarSubmit);


getAllCars().then((value) => {
    createMarkup(value);
});

function onCreateFormCarSubmit(evt) {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const car = {};
    formData.forEach((value, key) => {
        car[key] = value;
    })
        
    createCars(car).then(car => {
       refs.listCar.insertAdjacentHTML('beforeend', carTemplate(car));
    })
    refs.form.reset();
};




function onUpdateFormCarSubmit(evt) {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const car = {};
    formData.forEach((value, key) => {
        if(value)
        car[key] = value;
    })
    updateCars(car.id, car).then(car => {
        console.log(car);
    })
    const oldCar = refs.listCar.querySelector(`[data-id="${car.id}"]`);
    oldCar.insertAdjacentHTML('afterend', carTemplate(car));
    oldCar.remove();
    refs.form1.reset();
};


function onResetFormCarSubmit(evt) {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const car = {};
    formData.forEach((value, key) => {
        car[key] = value;
    })
    resetCars(car.id, car).then(car => {
        console.log(car);
    })
    const oldCar = refs.listCar.querySelector(`[data-id="${car.id}"]`);
    oldCar.insertAdjacentHTML('afterend', carTemplate(car));
    oldCar.remove();
    refs.form2.reset();

};

function onDeleteFormCarSubmit(evt) {
    evt.preventDefault();
    const inputDeleteCar = refs.form3.elements.id.value;
    deleteCars(inputDeleteCar).then(car => {
        console.log(car);
    })
    const oldCar = refs.listCar.querySelector(`[data-id="${inputDeleteCar}"]`);
    oldCar.remove();
    refs.form3.reset();

};
function createMarkup(cars) {
    const markup = cars.map(carTemplate).join('');
    refs.listCar.innerHTML = markup;
};


const carTemplate = ({id, model, marka, year, price}) => {
    return `
            <li data-id="${id}" class="book">
        <h3>${model}</h3>
        <h4>${marka}</h4>
        <p>${year}</p>
        <p>${price}</p>
        <p>${id}</p>
      </li>`
    }