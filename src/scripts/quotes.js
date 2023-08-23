import { getAllQuotes, getAuthorQuotes } from '../modules/quotes';

const refs = {
  ulList: document.querySelector('.js-quotes'),
  form: document.querySelector('.js-form'),
};

refs.form.addEventListener('submit', onFormSubmit);

async function onFormSubmit(evt) {
  evt.preventDefault();
  const userInput = refs.form.elements.author.value;
  if (userInput === '') {
    const quotes = await getAllQuotes();
    createMarkup(quotes);
  } else {
    const quotes = await getAuthorQuotes(userInput);
    createMarkup(quotes);
  }
  evt.target.reset();
}

function createMarkup(quotes) {
  const markup = quotes.map(quotsTemplate).join('');
  refs.ulList.innerHTML = markup;
}

getAllQuotes().then(quotes => {
  createMarkup(quotes);
});

function quotsTemplate({ id, author, body, tag, lang }) {
  return `
    <li data-id="${id}" class="book">
<h3>${author}</h3>
<p>${body}</p>
<div class="quotes-span">
    <span>${tag}</span>
    <span>${lang}</span>
</div>
</li>`;
}
