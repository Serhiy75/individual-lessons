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
};

const customerCar = document.querySelector('.customers');

function customerNameRender(arrey) {


  const markup = arrey.map(({ name }) => {
    return `
    <li class="box">${name}</li>`
  }).join('');
  customerCar.innerHTML = markup;
};


