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
