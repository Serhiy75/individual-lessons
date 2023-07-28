class NoteManager {
  constructor() {
    this.notes = [];
  }

  addNote(title, content) {
    const newNote = {
      title,
      content,
      inProgress: true,
      createdAt: new Date(),
    };
    this.notes.push(newNote);
    return newNote;
  }

  // Отримати список всіх заміток
  getAllNotes() {
    return this.notes;
  }

  // Знайти замітку за заголовком
  findNoteByTitle(title) {
    return this.notes.find(note => note.title === title);
  }

  // Оновити замітку за заголовком
  updateNoteByTitle(title, newTitle, newContent) {
    const noteToUpdate = this.findNoteByTitle(title);
    if (noteToUpdate) {
      noteToUpdate.title = newTitle;
      noteToUpdate.content = newContent;
      return noteToUpdate;
    }
    return null;
  }

  // Видалити замітку за заголовком
  deleteNoteByTitle(title) {
    const index = this.notes.findIndex(note => note.title === title);
    if (index !== -1) {
      this.notes.splice(index, 1);
      return true;
    }
    return false;
  }
}

const NoteManager1 = new NoteManager()


const notionForm = document.querySelector('#noteForm');
notionForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  let content = notionForm.elements.noteContent.value;
  let title = notionForm.elements.noteTitle.value;
  NoteManager1.addNote(title, content);
  renderNote(NoteManager1.notes);
  notionForm.reset();
  localStorage.removeItem('NOTION_USER');
  localStorage.setItem('NOTE_MENAGER', JSON.stringify(NoteManager1.notes));
  
}

const listElem = document.querySelector('.js-list');
const btnDelete = document.querySelector('.js-btn');
btnDelete.addEventListener('click', onContentDelete);



function renderNote(notions) {
  const markup = notions.map((el) => {
    return `
      <li class="item note box">
        <h3>${el.title}</h3>
        <p>${el.content}</p>
      </li>`
  }).join('');
  listElem.innerHTML = markup;
};

function onContentDelete() {
  
  NoteManager1.notes.shift();
  renderNote(NoteManager1.notes);
  localStorage.setItem('NOTE_MENAGER', JSON.stringify(NoteManager1.notes));
};
//////////////////////видалення////////////////////////

const textForm = document.querySelector('#textForm');
textForm.addEventListener('submit', onDeleteFormSubmit);

function onDeleteFormSubmit(evt) {
  evt.preventDefault();
  let deleteTitle = textForm.elements.noteTitle.value;
  NoteManager1.deleteNoteByTitle(deleteTitle);
  renderNote(NoteManager1.notes);
  textForm.reset();
  localStorage.setItem('NOTE_MENAGER', JSON.stringify(NoteManager1.notes));
};

notionForm.addEventListener('input', onNotionFormInput);

function onNotionFormInput(evt) {
  
  let notionFormUser = {
    noteTitle: notionForm.elements.noteTitle.value,
    noteContent: notionForm.elements.noteContent.value,
  }

  localStorage.setItem('NOTION_USER', JSON.stringify(notionFormUser));
}

function onLoad() {

   let notionUser = JSON.parse(localStorage.getItem('NOTION_USER'));
  notionForm.elements.noteTitle.value = notionUser?.noteTitle || '';
  notionForm.elements.noteContent.value = notionUser?.noteContent || '';
  
   let userList = JSON.parse(localStorage.getItem('NOTE_MENAGER'));
  NoteManager1.notes = userList || [];
  renderNote(NoteManager1.notes);

};
onLoad();

////////////////////////////////////////////////////////////////////