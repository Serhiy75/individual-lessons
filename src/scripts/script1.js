const cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

const carsElem = document.querySelector('.js-table-cars').lastElementChild;

function createMarkup(cars) {
  const markup = cars.map(({ make, model, type, amount, price, onSale }) => {
    return ` <tr>
          <td>${make}</td>
          <td>${model}</td>
          <td>${type}</td>
          <td>${amount}</td>
          <td>${price}</td>
          <td data-onsale="${onSale}">${onSale}</td>
        </tr>`
  }).join('');

  carsElem.innerHTML = markup;
}
createMarkup(cars);

function countCars() {
  const result = carsElem.querySelectorAll('[data-onsale = "true" ]')
  
  const carInfoElem = document.querySelector('.js-cars-onsale');
  carInfoElem.innerHTML = `кільсть авто на продаж ${result.length}`;
  const result1 = carsElem.querySelectorAll('[data-onsale = "false" ]');
  const carInfoElem1 = document.querySelector('.js-cars-notavailable');
  carInfoElem1.innerHTML = `кільсть авто відсутніх для продажу ${result1.length}`;
}
countCars();


