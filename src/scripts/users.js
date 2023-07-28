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

const Department1 = new Department();

const userForm = document.querySelector('#noteForm');
userForm.addEventListener('submit', onUserFormSubmit);

function onUserFormSubmit(evt) {
  evt.preventDefault();
  console.log(evt);
  let content = userForm.elements.username.value;
  let email = userForm.elements.userEmail.value;
  let text = userForm.elements.userRole.value;
  Department1.addUser(content, text, email);
  renderUsers(Department1.users); 
  userForm.reset();
  localStorage.removeItem('USER_INFO');
  localStorage.setItem('USER_LIST', JSON.stringify(Department1.users));
}

const userList = document.querySelector('.js-list');
userList.addEventListener('click', onUserClick);


function renderUsers(users) {
  const markup = users.map(({name, email, id}) => {
    return `
      <li class="item user box" data-id="${id}">
        <img class="user-image"
          src="https://source.unsplash.com/500x500/?random=${id}&avatar,user,human,people"
          alt="user"
        />
        <div>
          <h3 class="user-name">${name}</h3>
          <p class="user-info">${email}</p>
        </div>
        
      </li>`
  }).join('');
  userList.innerHTML = markup;
};

function onUserClick(evt) {
  if (evt.target === evt.currentTarget) {
    return;
  }
  let userTarget = evt.target.closest('li');
  let id = +userTarget.dataset.id;
  const user = Department1.users.find((el) => el.id === id);
  document.body.classList.add('show-modal');
  renderModal(user);
}
const userModal = document.querySelector('.js-modal');

function renderModal(user) {
  const markup = `    <div class="fb">
          <img class="user-image"
          src="https://source.unsplash.com/500x500/?random=1&avatar,user,human,people"
          alt="user"
        />
        <div>
          <h3 class="user-name">${user.name}</h3>
          <p class="user-info">${user.email}</p>
        </div>
      </div>
        <p>${user.role}</p>
      </div>`
  userModal.innerHTML = markup;
}

const backdropElem = document.querySelector('.backdrop');
backdropElem.addEventListener('click', onModalClose);

function onModalClose(evt) {
  if (evt.target === backdropElem) {
    document.body.classList.remove('show-modal')
  }
}
const userInput = document.querySelector('.js-input');
userInput.addEventListener('input', onFilterUser);

function onFilterUser(evt) {
  
  let userInputValue = userInput.value;
  let FilteredUsers = Department1.users.filter((el) => {
   return el.name.includes(userInputValue)
  })
  renderUsers(FilteredUsers);
}

userForm.addEventListener('input', onInputChange);

function onInputChange(evt) {
  let userInfo = {
  userName: userForm.elements.username.value,
  userEmail: userForm.elements.userEmail.value,
  userRole: userForm.elements.userRole.value,
  }
  localStorage.setItem('USER_INFO', JSON.stringify(userInfo));

};

function onLoad() {
  let userInfo = JSON.parse(localStorage.getItem('USER_INFO'));
  userForm.elements.username.value = userInfo?.userName || '';
  userForm.elements.userEmail.value = userInfo?.userEmail || '';
  userForm.elements.userRole.value = userInfo?.userRole || '';

  let userList = JSON.parse(localStorage.getItem('USER_LIST'));
  Department1.users = userList || [];
  renderUsers(Department1.users );
};
onLoad();