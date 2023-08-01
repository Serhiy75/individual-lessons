
// function getPostsALL(userId) {
//     const BASE_URL = 'https://jsonplaceholder.typicode.com';

//     const END_POINT = `/posts?id=${userId}`;

//     const url = BASE_URL + END_POINT;

//     return fetch(url).then(res => res.json());
    
// };

// getPostsALL(2).then(posts => {
//     console.log(posts);
// });

// getPostsALL(12).then(param => {
//     console.log(param);
// });
///////////////////////////////////////////////////////////

// task1
// Напишите функцию getUsers(), которая делает GET-запрос на /users и возвращает
// массив всех пользователей.

const refs = {
    button1: document.querySelector('.js-button1'),
    button2: document.querySelector('.js-button2'),
    button3: document.querySelector('.js-button3'),
    button4: document.querySelector('.js-button4'),
    button5: document.querySelector('.js-button5'),
    form2: document.querySelector('.js-Form2'),
    form3: document.querySelector('.js-form3'),
    form4: document.querySelector('.js-form4'),
    form5: document.querySelector('.js-form5'),
    form6: document.querySelector('.js-form6'),
    form7: document.querySelector('.js-form7'),
    form8: document.querySelector('.js-form8'),
    form9: document.querySelector('.js-form9'),
    form10: document.querySelector('.js-form10'),

}




refs.button1.addEventListener('click', onButton1Click);

function onButton1Click(evt) {
   getUsers().then(param => {
    console.log(param)
}); 

}

function getUsers() {
    const BASE_URL = 'https://jsonplaceholder.typicode.com';
    const END_POINT = '/users';
    const url = BASE_URL + END_POINT; 
    return fetch(url).then(res => res.json());
};



/////////////////////////////////////////////////////

// Напишите функцию getUserPosts(userId), которая делает GET-запрос на
// /posts?userId={userId}, где {userId} - идентификатор пользователя, и возвращает
// массив всех постов, принадлежащих этому пользователю. Расширьте предыдущую
// функцию и добавьте параметр limit, чтобы ограничить количество возвращаемых
// постов. Например, getUserPosts(userId, limit).

function getUserPosts(userId,limit) {
    
    const BASE_URL = 'https://jsonplaceholder.typicode.com';
    const END_POINT = `/posts?userId=${userId}&_limit=${limit}`;
    const url = BASE_URL + END_POINT;
    return fetch(url).then(res => res.json());
}

refs.form2.addEventListener('submit', onButton2Submit);

function onButton2Submit(evt) {
    evt.preventDefault();
    const UserPostValue = evt.currentTarget.elements.Post2.value;
    const UserLimitValue = evt.currentTarget.elements.limit2.value;
  getUserPosts(UserPostValue, UserLimitValue).then(param => {
    console.log(param);
});  
};



//////////////////////////////////////////////////////////////////

// Напишите функцию getPostComments(postId), которая делает GET-запрос на
// /comments?postId={postId}, где {postId} - идентификатор поста, и возвращает
// массив всех комментариев к этому посту. Создайте функцию createPost(postData),
// которая делает POST-запрос на /posts, отправляя данные нового поста в postData.
// Пусть функция возвращает созданный объект поста с присвоенным идентификатором.

refs.form3.addEventListener('submit', onForm3Submit);

function onForm3Submit(evt) {
    evt.preventDefault();
    const userPost3 = evt.currentTarget.elements.post3.value;
    const userLimit3 = evt.currentTarget.elements.limit3.value;
getPostComments(userPost3,userLimit3).then(param => {
    console.log(param);
});
}

function getPostComments(postId, limit) {
    const BASE_URL = 'https://jsonplaceholder.typicode.com';
    const END_POINT = `/comments?postId=${postId}&_limit=${limit}`;
    const url = BASE_URL + END_POINT;
    return fetch(url).then(res => res.json());
};


//  function createPost(postData){}  //НЕ ЗАВЕРШИНА//

///////////////////////////////////////////////////////////////////

// Разработайте функцию getTodosByStatus(userId, completed), которая делает
// GET-запрос на /todos?userId={userId}&completed={completed}, где {userId} -
// идентификатор пользователя, а completed - булево значение, указывающее на статус
// выполнения задачи. Функция должна возвращать массив задач пользователя с
// заданным статусом выполнения.

refs.form4.addEventListener('submit', onUserTask4Submit);

function onUserTask4Submit(evt) {
    evt.preventDefault();
    const userTodos = evt.currentTarget.elements.Todos.value;
    const userCompleted = evt.target.elements.completed.checked;
    getTodosByStatus(userTodos, userCompleted).then(param => {
    console.log(param);
});
}

function getTodosByStatus(userId, completed) {
    
    const BASE_URL = 'https://jsonplaceholder.typicode.com';
    const END_POINT = `/todos?userId=${userId}&completed=${completed}`;
    const url = BASE_URL + END_POINT;
    return fetch(url).then(res => res.json());
};



///////////////////////////////////////////////////////////////////////

// Создайте функцию getAlbumPhotos(albumId), которая делает GET-запрос на
// /photos?albumId={albumId}, где {albumId} - идентификатор альбома, и возвращает
// массив фотографий этого альбома.

refs.form5.addEventListener('submit', onUserAlbumIdSubmit);

function onUserAlbumIdSubmit(evt) {
    evt.preventDefault();
    const userAlbumId = evt.target.elements.albumId.value;
    const userLimit5 = evt.target.elements.limit5.value;

getAlbumPhotos(userAlbumId, userLimit5).then(param => {
    console.log(param);
});
}


function getAlbumPhotos(albumId, limit) {
    const BASE_URL = 'https://jsonplaceholder.typicode.com';
    const END_POINT = `/photos?albumId=${albumId}&_limit=${limit}`;
    const url = BASE_URL + END_POINT;
    return fetch(url).then(res => res.json());
};
   
/////////////////////////////////////////////////////////////////////////////////

// ReqRes (https://reqres.in/):

// Получить список всех пользователей и вывести их имена и профессии.

function getAllUserName() {
    const BASE_URL = 'https://reqres.in';
    const END_POINT = `/api/users`;
    const url = BASE_URL + END_POINT;
    return fetch(url).then(res => res.json());
};
refs.form6.addEventListener('submit', onUserListSubmit);

function onUserListSubmit(evt) {
    evt.preventDefault();
    getAllUserName().then(params => {
        console.log(params.data.map(({first_name, email}) => {return {first_name, email}}));
    })   
};

////////////////////////////////////////////////////////////////////////////////////

// Получить данные одного пользователя (например, id=2) и вывести их на экран.

refs.form7.addEventListener('submit', onForm7Submit);

function getUserById(id) {
     const BASE_URL = 'https://reqres.in';
    const END_POINT = `/api/users/${id}`;
    const url = BASE_URL + END_POINT;
    return fetch(url).then(res => res.json());

}

function onForm7Submit(evt) {
    evt.preventDefault();
    const userId = evt.target.elements.id.value;
    getUserById(userId).then(param => {
        console.log(param.data);
    })
};

////////////////////////////////////////////////////////////////////////////////////

// Получить список всех задач (LIST) и отсортировать их по дате создания.

refs.form8.addEventListener('submit', onForm8Submit);

function getUsersList() {
    
    const BASE_URL = 'https://reqres.in';
    const END_POINT = '/api/unknown';
    const url = BASE_URL + END_POINT;
    return fetch(url).then(res => res.json());
};

function onForm8Submit(evt) {
    evt.preventDefault();
    getUsersList().then(param => {
        console.log(param.data);
    })
};

/////////////////////////////////////////////////////////////////////////////////

function getWomanName() {
    const BASE_URL = 'https://reqres.in';
    const END_POINT = `/api/users`;
    const url = BASE_URL + END_POINT;
    return fetch(url).then(res => res.json());
}

refs.form9.addEventListener('submit', onForm9Submit);

function onForm9Submit(evt) {
    evt.preventDefault();
    getWomanName().then(param => {
        console.log(param.data.filter(({ id }) => {
            return id % 2 === 0
        }));
    })

};
///////////////////////////////////////////////////////////////////

// Получить список всех страниц и вывести их номера и содержимое.

refs.form10.addEventListener('submit', onForm10Submit);

function getPages(page) {
    
    const BASE_URL = 'https://reqres.in';
    const END_POINT = `/api/unknown?page=${page}`;
    const url = BASE_URL + END_POINT;
    return fetch(url).then(res => res.json());
};

function onForm10Submit(evt) {
    evt.preventDefault();
   
   const P1 = getPages(1)
    const P2 = getPages(2)
    Promise.all([P1, P2]).then(res => {
        console.log(res);
    });
};


