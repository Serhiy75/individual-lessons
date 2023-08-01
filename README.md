Напишите функцию getUsers(), которая делает GET-запрос на /users и возвращает
массив всех пользователей.

Напишите функцию getUserPosts(userId), которая делает GET-запрос на
/posts?userId={userId}, где {userId} - идентификатор пользователя, и возвращает
массив всех постов, принадлежащих этому пользователю. Расширьте предыдущую
функцию и добавьте параметр limit, чтобы ограничить количество возвращаемых
постов. Например, getUserPosts(userId, limit).

Напишите функцию getPostComments(postId), которая делает GET-запрос на
/comments?postId={postId}, где {postId} - идентификатор поста, и возвращает
массив всех комментариев к этому посту. Создайте функцию createPost(postData),
которая делает POST-запрос на /posts, отправляя данные нового поста в postData.
Пусть функция возвращает созданный объект поста с присвоенным идентификатором.

Напишите функцию updatePost(postId, updatedData), которая делает PUT-запрос на
/posts/{postId}, где {postId} - идентификатор поста, и обновляет его согласно
updatedData. Функция должна возвращать обновленный объект поста.

Реализуйте функцию deletePost(postId), которая делает DELETE-запрос на
/posts/{postId}, где {postId} - идентификатор поста, и удаляет этот пост.
Функция должна возвращать подтверждение успешного удаления. Дополните функцию
getUsers() и добавьте параметр filter, чтобы можно было получить пользователей,
соответствующих определенным условиям. Например, getUsers({ company: "OpenAI" })
вернет пользователей, у которых название компании "OpenAI".

Разработайте функцию getTodosByStatus(userId, completed), которая делает
GET-запрос на /todos?userId={userId}&completed={completed}, где {userId} -
идентификатор пользователя, а completed - булево значение, указывающее на статус
выполнения задачи. Функция должна возвращать массив задач пользователя с
заданным статусом выполнения.

Создайте функцию getAlbumPhotos(albumId), которая делает GET-запрос на
/photos?albumId={albumId}, где {albumId} - идентификатор альбома, и возвращает
массив фотографий этого альбома.

ReqRes (https://reqres.in/):

Получить список всех пользователей и вывести их имена и профессии.

Получить данные одного пользователя (например, id=2) и вывести их на экран.

Получить список всех задач (LIST) и отсортировать их по дате создания.

Получить список всех пользователей и отфильтровать только женщин....

Получить список всех страниц и вывести их номера и содержимое.

RandomUser.me (https://randomuser.me/):

Получить случайного пользователя и вывести его имя, пол и национальность.

Получить случайных 5 пользователей
