import { createBook, deleteBook, updateBook, resetBook } from './modules/books'



const refs = {
    form: document.querySelector('.js-form'),
    form3: document.querySelector('.js-form3'),
    form1: document.querySelector('.js-form1'),
    form2: document.querySelector('.js-form2'),
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
        console.log(book);
    })
    evt.target.reset();
};

function onDEleteBookSubmit(evt) {
    evt.preventDefault();
    const deleteBookId = evt.target.elements.id.value;
    deleteBook(deleteBookId).then(book => {
        console.log(book);
    })
    evt.target.reset();
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
        console.log(book);
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
    })
    evt.target.reset();
};