class CarDealership {
  constructor(name) {
    this.name = name;
    this.cars = [];
    this.customers = [];
  }

  // Метод для добавления автомобиля в автосалон
  addCar(car) {
    this.cars.push(car);
    console.log(
      `Автомобиль ${car.make} ${car.model} добавлен в автосалон "${this.name}"`,
    );
  }

  // Метод для удаления автомобиля из автосалона
  removeCar(car) {
    const index = this.cars.findIndex(c => c === car);
    if (index !== -1) {
      this.cars.splice(index, 1);
      console.log(
        `Автомобиль ${car.make} ${car.model} удален из автосалона "${this.name}"`,
      );
    } else {
      console.log(
        `Автомобиль ${car.make} ${car.model} не найден в автосалоне "${this.name}"`,
      );
    }
  }

  // Метод для добавления покупателя
  addCustomer(customer) {
    this.customers.push(customer);
    console.log(
      `Покупатель ${customer.name} добавлен в автосалон "${this.name}"`,
    );
  }

  // Метод для вывода всех доступных автомобилей
  displayAvailableCars() {
    console.log(`Доступные автомобили в автосалоне "${this.name}":`);
    this.cars.forEach((car, index) => {
      console.log(
        `${index + 1}. ${car.make} ${car.model} (${car.year}) - ${car.price}$`,
      );
    });
  }

  // Метод для вывода всех покупателей
  displayCustomers() {
    console.log(`Зарегистрированные покупатели в автосалоне "${this.name}":`);
    this.customers.forEach((customer, index) => {
      console.log(`${index + 1}. ${customer.name}`);
    });
  }
}

// Пример использования класса
class Car {
  constructor(make, model, year, price) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.price = price;
  }
}

class Customer {
  constructor(name) {
    this.name = name;
  }
}

const carDealership = new CarDealership('name');


const dealershipForm = document.querySelector('.js-dealership');
dealershipForm.addEventListener('submit', onCarsDealerSubmit);


function onCarsDealerSubmit(evt) {
  evt.preventDefault();
  let carMake = evt.target.elements.make.value;
  let carModel = evt.target.elements.model.value;
  let carYear = evt.target.elements.year.value;
  let carPrice = evt.target.elements.price.value;
  const car = new Car(carMake, carModel, carYear, carPrice);
  carDealership.addCar(car);
  renderCar(carDealership.cars); 
  dealershipForm.reset();
  localStorage.removeItem('cars');
  localStorage.setItem('formCars', JSON.stringify(carDealership.cars));
};

const userCars = document.querySelector('.cars');

function renderCar(cars) {
  const markup = cars.map(({make, model, year, price}) => {
    return `
    <li class="box">
          <h3 class="box">${make}</h3>
          <h4 class="box">${model}</h4>
          <p class="box">${year}</p>
          <p class="box">${price}</p>
        </li> `
  }).join('');
  userCars.innerHTML = markup;
};

const customersForm = document.querySelector('.js-customers');
customersForm.addEventListener('submit', onCustomerCarsSubmit);

function onCustomerCarsSubmit(evt) {
  evt.preventDefault();
  let customerName = evt.target.elements.name.value;
  carDealership.addCustomer(new Customer(customerName));
  customerNameRender(carDealership.customers);
  localStorage.removeItem('customerName')
  customersForm.reset()
  localStorage.setItem('customerNames', JSON.stringify(carDealership.customers));
};

const customerCar = document.querySelector('.customers');

function customerNameRender(arrey) {


  const markup = arrey.map(({ name }) => {
    return `
    <li class="box">${name}</li>`
  }).join('');
  customerCar.innerHTML = markup;
};

customersForm.addEventListener('input', onSaveCustomerInput);

function onSaveCustomerInput(evt) {
   let customerName = evt.target.value;
  localStorage.setItem('customerName', customerName);
  
}
function onLoad() {
  let customerName = localStorage.getItem('customerName');
  customersForm.elements.name.value = customerName;

   let arrayName = JSON.parse(localStorage.getItem('customerNames'));
  carDealership.customers = arrayName || [];
  customerNameRender(carDealership.customers);

  let arreyFormCars = JSON.parse(localStorage.getItem('formCars'));
  carDealership.cars = arreyFormCars || [];
  renderCar(carDealership.cars);
  
  let dealerCars = JSON.parse(localStorage.getItem('cars'));
  dealershipForm.elements.make.value = dealerCars?.carMake || '';
  dealershipForm.elements.model.value = dealerCars?.carModel || '';
  dealershipForm.elements.year.value = dealerCars?.carYear || '';
  dealershipForm.elements.price.value = dealerCars?.carPrice || '';

}
onLoad()

dealershipForm.addEventListener('input', onCustomerCarsInput);

function onCustomerCarsInput(evt) {
  
  let dealerCars = {
  carMake: evt.currentTarget.elements.make.value,
  carModel: evt.currentTarget.elements.model.value,
  carYear: evt.currentTarget.elements.year.value,
  carPrice: evt.currentTarget.elements.price.value
  }
  localStorage.setItem('cars', JSON.stringify(dealerCars));
}
