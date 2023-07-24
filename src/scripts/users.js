class Department {
  constructor() {
    this.users = [];
  }

  // Додати нового користувача
  addUser(name, role, email) {
    const newUser = {
      id: Math.round(Math.random() * 100000),
      name,
      role,
      email,
    };
    this.users.push(newUser);
    return newUser;
  }

  // Отримати список всіх користувачів
  getAllUsers() {
    return this.users;
  }

  // Знайти користувача за ім'ям
  findUserByName(name) {
    return this.users.find(user => user.name === name);
  }

  // Оновити дані користувача за ім'ям
  updateUserByName(name, newRole, newEmail) {
    const userToUpdate = this.findUserByName(name);
    if (userToUpdate) {
      userToUpdate.role = newRole;
      userToUpdate.email = newEmail;
      return userToUpdate;
    }
    return null;
  }

  // Видалити користувача за ім'ям
  deleteUserByName(name) {
    const index = this.users.findIndex(user => user.name === name);
    if (index !== -1) {
      this.users.splice(index, 1);
      return true;
    }
    return false;
  }
}
