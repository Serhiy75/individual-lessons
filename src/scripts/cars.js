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
