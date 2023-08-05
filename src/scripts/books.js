import { createBook, deleteBook, updateBook, resetBook, getAllBooks } from '../modules/books'



const refs = {
    form: document.querySelector('.js-form'),
    form3: document.querySelector('.js-form3'),
    form1: document.querySelector('.js-form1'),
    form2: document.querySelector('.js-form2'),
    ulList: document.querySelector('.js-bookList')
};

refs.form.addEventListener('submit', onCreateBooksSubmit);
refs.form3.addEventListener('submit', onDEleteBookSubmit);
refs.form1.addEventListener('submit', onUpdateBookSubmit);
refs.form2.addEventListener('submit', onResetBookSubmit);


function onCreateBooksSubmit(evt) {
    evt.preventDefault();

    const formData = new FormData(evt.target);
    const book = {};
    formData.forEach((value, key) => {
        book[key] = value;
    })

    createBook(book).then(book => {
        const murkup = bookTamplate(book);
        refs.ulList.insertAdjacentHTML('beforeend', murkup)
    })
    evt.target.reset();
    
};

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
</li> `
}

function onDEleteBookSubmit(evt) {
    evt.preventDefault();
    const deleteBookId = evt.target.elements.id.value;
    deleteBook(deleteBookId).then(book => {
        console.log(book);
    })
    evt.target.reset();
    refs.ulList.querySelector(`[data-id="${deleteBookId}"]`).remove();
};
function onUpdateBookSubmit(evt) {
    evt.preventDefault();

    const formData = new FormData(evt.target);
    const book = {}
    
    formData.forEach((value, key) => {
        if (value) {
            book[key] = value;
        }

    })

    const updateBookId = book.id; 
    updateBook(updateBookId, book).then(book => {
        const murkup = bookTamplate(book);
     const updateBook = refs.ulList.querySelector(`[data-id="${updateBookId}"]`);
        updateBook.insertAdjacentHTML('afterend', murkup);
        updateBook.remove();
    })
    evt.target.reset();
};

function onResetBookSubmit(evt) {
    evt.preventDefault();
        const formData = new FormData(evt.target);
    const book = {}
    
    formData.forEach((value, key) => {
         
            book[key] = value;
        
    })
    resetBook(book.id, book).then(book => {
        console.log(book);
        const murkup = bookTamplate(book);
        const bookReset = refs.ulList.querySelector(`[data-id="${book.id}"]`);
        bookReset.insertAdjacentHTML('afterend', murkup);
        bookReset.remove();
    })
    evt.target.reset();

};

getAllBooks().then(param => {
    console.log(param);
    renderAllBooks(param)
});



function renderAllBooks(books) {
    const murkup = books.map(bookTamplate).join('');
    refs.ulList.innerHTML = murkup;
}
