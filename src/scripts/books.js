import {
  createBook,
  deleteBook,
  updateBook,
  resetBook,
  getAllBooks,
} from '../modules/books';

const refs = {
  form: document.querySelector('.js-form'),
  form3: document.querySelector('.js-form3'),
  form1: document.querySelector('.js-form1'),
  form2: document.querySelector('.js-form2'),
  ulList: document.querySelector('.js-bookList'),
};

refs.form.addEventListener('submit', onCreateBooksSubmit);
refs.form3.addEventListener('submit', onDEleteBookSubmit);
refs.form1.addEventListener('submit', onUpdateBookSubmit);
refs.form2.addEventListener('submit', onResetBookSubmit);

async function onCreateBooksSubmit(evt) {
  evt.preventDefault();

  const formData = new FormData(evt.target);
  const book = {};
  formData.forEach((value, key) => {
    book[key] = value;
  });

  const book1 = await createBook(book);
  const murkup = bookTamplate(book1);
  refs.ulList.insertAdjacentHTML('beforeend', murkup);

  evt.target.reset();
}

function bookTamplate({ id, title, author, about, genre, amount, price }) {
  return `
       <li data-id="${id}" class="book">
  <h3 class="book__title">${title}</h3>
  <p class="book__desc">
   ${about}
  </p>

  <div class="book_footer">
    <p class="book_author">${author}</p>
    <span>${genre}</span>
    <span>${amount} - ${price}</span>
    <span> ID = ${id}<span>
  </div>
</li> `;
}

async function onDEleteBookSubmit(evt) {
  evt.preventDefault();
  const deleteBookId = evt.target.elements.id.value;
  const book = await deleteBook(deleteBookId);
  console.log(book);
  evt.target.reset();
  refs.ulList.querySelector(`[data-id="${deleteBookId}"]`).remove();
}
async function onUpdateBookSubmit(evt) {
  evt.preventDefault();

  const formData = new FormData(evt.target);
  const book = {};

  formData.forEach((value, key) => {
    if (value) {
      book[key] = value;
    }
  });

  const updateBookId = book.id;
  const book3 = await updateBook(updateBookId, book);
  const murkup = bookTamplate(book3);
  const updateBook = refs.ulList.querySelector(`[data-id="${updateBookId}"]`);
  updateBook.insertAdjacentHTML('afterend', murkup);
  updateBook.remove();
  evt.target.reset();
}

async function onResetBookSubmit(evt) {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  const book = {};

  formData.forEach((value, key) => {
    book[key] = value;
  });
  const book2 = await resetBook(book.id, book);
  console.log(book2);
  const murkup = bookTamplate(book2);
  const bookReset = refs.ulList.querySelector(`[data-id="${book2.id}"]`);
  bookReset.insertAdjacentHTML('afterend', murkup);
  bookReset.remove();

  evt.target.reset();
}

getAllBooks().then(param => {
  console.log(param);
  renderAllBooks(param);
});

function renderAllBooks(books) {
  const murkup = books.map(bookTamplate).join('');
  refs.ulList.innerHTML = murkup;
}
