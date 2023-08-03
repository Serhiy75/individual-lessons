import {
    getAllCars, getInfoCars, getCarsByMarka,
    getCarsByModel, getCarsByPage, 
} from "./modules/cars"

import {
    getAllQuotes, getAuthorQuotes, getIdQuotes,
    getLangQuotes, getTagQuotes, getRandomQuotes,
    getPageQuotes
} from "./modules/quotes"

import {
    getAllBooks, getBooksId,
    getBookAuthor, getBookGenre,
    getBookPrice, getPageBooks
} from "./modules/books"
  
import {
    getAllStudents, getStudentsId,
    getStudentMajor, getStudentAge,
    getStudentGpa, getPageStudents,
    getStudentGender
} from "./modules/students"

import {
    getAllUsers, getUsersId,
    getUsersName, getUsersAge,  
    getUsersCity, getUsersEmail,
    getUsersPhone
} from "./modules/users"

const refs = {
    btnElem: document.querySelector('.js-button1'),
    btnElem1: document.querySelector('.js-button'),
    form2: document.querySelector('.js-Form2'),
    form3: document.querySelector('.js-form3'),
    form4: document.querySelector('.js-form4'),
    form5: document.querySelector('.js-form5'),
    form6: document.querySelector('.js-form6'),
    form7: document.querySelector('.js-form7'),
    form8: document.querySelector('.js-form8'),
    form9: document.querySelector('.js-form9'),
    form10: document.querySelector('.js-form10'),
    form11: document.querySelector('.js-form11'),
    form12: document.querySelector('.js-form12'),
    form13: document.querySelector('.js-form13'),
    form14: document.querySelector('.js-form14'),
    form15: document.querySelector('.js-form15'),
    form16: document.querySelector('.js-form16'),
    form17: document.querySelector('.js-form17'),
    form18: document.querySelector('.js-form18'),
    form19: document.querySelector('.js-form19'),
    form20: document.querySelector('.js-form20'),
    form21: document.querySelector('.js-form21'),
    form22: document.querySelector('.js-form22'),
    form23: document.querySelector('.js-form23'),
    form24: document.querySelector('.js-form24'),
    form25: document.querySelector('.js-form25'),
    form26: document.querySelector('.js-form26'),
    form27: document.querySelector('.js-form27'),
    form28: document.querySelector('.js-form28'),
    form29: document.querySelector('.js-form29'),
    form30: document.querySelector('.js-form30'),
    form31: document.querySelector('.js-form31'),


}

refs.btnElem.addEventListener('click', onClickByCars);
refs.btnElem1.addEventListener('click', onClickByRandomQuotes);
refs.form2.addEventListener('submit', onInfoCarSubmit);
refs.form3.addEventListener('submit', onCarMarkaSubmit);
refs.form4.addEventListener('submit', onCarModelSubmit);
refs.form5.addEventListener('submit', onCarByPageSubmit);
refs.form6.addEventListener('submit', onAllQuotesSubmit);
refs.form7.addEventListener('submit', onAuthorSubmit);
refs.form8.addEventListener('submit', onQuotesIdSubmit);
refs.form9.addEventListener('submit', onQuotesLangSubmit);
refs.form10.addEventListener('submit', onQuotesTagSubmit);
refs.form11.addEventListener('submit', onQuotesPageSubmit);
refs.form12.addEventListener('submit', onAllBooksSubmit);
refs.form13.addEventListener('submit', onBooksIdSubmit);
refs.form14.addEventListener('submit', onBooksGenreSubmit);
refs.form15.addEventListener('submit', onBooksAuthorSubmit);
refs.form16.addEventListener('submit', onBooksPriceSubmit);
refs.form17.addEventListener('submit', onBooksPageSubmit);
refs.form18.addEventListener('submit', onAllStudentsSubmit);
refs.form19.addEventListener('submit', onStudentsIdSubmit);
refs.form20.addEventListener('submit', onStudentsMajorSubmit);
refs.form21.addEventListener('submit', onStudentsAgeSubmit);
refs.form22.addEventListener('submit', onStudentsGpaSubmit);
refs.form23.addEventListener('submit', onStudentsGenderSubmit);
refs.form24.addEventListener('submit', onStudentsPageSubmit);
refs.form25.addEventListener('submit', onAllUsersSubmit);
refs.form26.addEventListener('submit', onUsersIdSubmit);
refs.form27.addEventListener('submit', onUsersNameSubmit);
refs.form28.addEventListener('submit', onUsersAgeSubmit);
refs.form29.addEventListener('submit', onUsersCitySubmit);
refs.form30.addEventListener('submit', onUsersEmailSubmit);
refs.form31.addEventListener('submit', onUsersPhoneSubmit);

function onClickByCars(evt) {
    
    getAllCars().then(param => {
       console.log(param);
   }) 
};

function onInfoCarSubmit(evt) {
    evt.preventDefault();
    const carId = evt.target.elements.id.value;
    getInfoCars(carId).then(param => {
        console.log(param);
    })

}

function onCarMarkaSubmit(evt) {
    evt.preventDefault();
    const carMarca = evt.target.elements.marka.value;
    getCarsByMarka(carMarca).then(param => {
        console.log(param);
    })
};

function onCarModelSubmit(evt) {
    evt.preventDefault();
    const carModel = evt.target.elements.model.value;
    getCarsByModel(carModel).then(param => {
        console.log(param);
    })
};
function onCarByPageSubmit(evt) {
    evt.preventDefault();
    const carPage = evt.target.elements._page.value;
    const carPageLimit = evt.target.elements._limit.value;
    getCarsByPage(carPage, carPageLimit).then(param => {
        console.log(param);
    })
};

function onAllQuotesSubmit(evt) {
    evt.preventDefault();
    getAllQuotes().then(quotes => {
        console.log(quotes);
    } )
};

function onAuthorSubmit(evt) {
    evt.preventDefault();
    const authorQuotes = evt.target.elements.author.value;
    getAuthorQuotes(authorQuotes).then(author => {
        console.log(author);
    })
};

function onQuotesIdSubmit(evt) {
    evt.preventDefault();
    const quotesId = evt.target.elements.id.value;
    getIdQuotes(quotesId).then(id => {
       console.log(id);
   }) 
};

function onQuotesLangSubmit(evt) {
    evt.preventDefault();
    const quotesLang = evt.target.elements.lang.value;
    getLangQuotes(quotesLang).then(quotes => {
        console.log(quotes);
    })
};

function onQuotesTagSubmit(evt) {
    evt.preventDefault();
    const quotesTag = evt.target.elements.tag.value;
    getTagQuotes(quotesTag).then(quotes => {
        console.log(quotes);
    })
};

function onClickByRandomQuotes(evt) {
    getRandomQuotes().then(quotes => {
       console.log(quotes);
   }) 
};

function onQuotesPageSubmit(evt) {
    evt.preventDefault();
    const quotesPage = evt.target.elements._page.value;
    const quotesLimit = evt.target.elements._limit.value;
    getPageQuotes(quotesPage, quotesLimit).then(quotes => {
        console.log(quotes);
    })
};

function onAllBooksSubmit(evt) {
    evt.preventDefault();
     getAllBooks().then(books => {
        console.log(books);
    })
};

function onBooksIdSubmit(evt) {
    evt.preventDefault();
    const booksId = evt.target.elements.id.value;
    getBooksId(booksId).then(id => {
        console.log(id);
    })
};

function onBooksGenreSubmit(evt) {
    evt.preventDefault();
    const booksGenre = evt.target.elements.genre.value;
    getBookGenre(booksGenre).then(genre => {
        console.log(genre);
    })
};

function onBooksAuthorSubmit(evt) {
    evt.preventDefault();
    const bookAuthor = evt.target.elements.author.value;
    getBookAuthor(bookAuthor).then(author => {
        console.log(author);
    })
};

function onBooksPriceSubmit(evt) {
    evt.preventDefault();
    const bookPrice = evt.target.elements.price.value;
    getBookPrice(bookPrice).then(price => {
        console.log(price);
    })
};

function onBooksPageSubmit(evt) {
    evt.preventDefault();
    const booksPage = evt.target.elements._page.value;
    const booksLimit = evt.target.elements._limit.value;
    getPageBooks(booksPage, booksLimit).then(books => {
        console.log(books);
    })
};

function onAllStudentsSubmit(evt) {
    evt.preventDefault();
    getAllStudents().then(students => {
        console.log(students);
    } )
};

function onStudentsIdSubmit(evt) {
    evt.preventDefault();
    const studentId = evt.target.elements.id.value;
    getStudentsId(studentId).then(student => {
        console.log(student);
    })
};

function onStudentsMajorSubmit(evt) {
    evt.preventDefault();
    const studentMajor = evt.target.elements.major.value;
    getStudentMajor(studentMajor).then(student => {
        console.log(student);
    })
};

function onStudentsAgeSubmit(evt) {
    evt.preventDefault();
    const studentAge = evt.target.elements.age.value;
    getStudentAge(studentAge).then(student => {
        console.log(student);
    })
};

function onStudentsGpaSubmit(evt) {
    evt.preventDefault();
    const studentGpa = evt.target.elements.gpa.value;
    getStudentGpa(studentGpa).then(student => {
        console.log(student);
    })
};

function onStudentsGenderSubmit(evt) {
    evt.preventDefault();
    const studentGender = evt.target.elements.gender.value;
    getStudentGender(studentGender).then(student => {
        console.log(student);
    })
};

function onStudentsPageSubmit(evt) {
    evt.preventDefault();
    const studentsPage = evt.target.elements._page.value;
    const studentsLimit = evt.target.elements._limit.value;
    getPageStudents(studentsPage, studentsLimit).then(students => {
        console.log(students);
    })
};

function onAllUsersSubmit(evt) {
    evt.preventDefault();
    getAllUsers().then(users => {
        console.log(users);
    } )
};

function onUsersIdSubmit(evt) {
    evt.preventDefault();
    const userId = evt.target.elements.id.value;
    getUsersId(userId).then(user => {
        console.log(user);
    })
};

function onUsersNameSubmit(evt) {
    evt.preventDefault();
    const userName = evt.target.elements.name.value;
    getUsersName(userName).then(user => {
        console.log(user);
    })
};

function onUsersAgeSubmit(evt) {
    evt.preventDefault();
    const userAge = evt.target.elements.age.value;
    getUsersAge(userAge).then(user => {
        console.log(user);
    })
};

function onUsersCitySubmit(evt) {
    evt.preventDefault();
    const userCity = evt.target.elements.city.value;
    getUsersCity(userCity).then(user => {
        console.log(user);
    })
};

function onUsersEmailSubmit(evt) {
    evt.preventDefault();
    const userEmail = evt.target.elements.email.value;
    getUsersEmail(userEmail).then(user => {
        console.log(user);
    })
};

function onUsersPhoneSubmit(evt) {
    evt.preventDefault();
    const userPhone = evt.target.elements.phone.value;
    getUsersPhone(userPhone).then(user => {
        console.log(user);
    })
};





