// Student

// Получение всех студентов.
//  Получение информации о студенте по его идентификатору.
// Поиск студентов по специальности(major).
//  Поиск студентов по возрасту.
// Сортировка студентов по их среднему баллу (GPA) (по возрастанию или убыванию).
// Фильтрация студентов по полу (gender).
//  Пагинация списка студентов.

const BASE_URL = `http://localhost:5000`;

export function getAllStudents() {
    const END_POINT = `/students`;
    const url = BASE_URL + END_POINT;
    return fetch(url).then(res => res.json());
};

export function getStudentsId(id) {
    const END_POINT = `/students?id=${id}`;
    const url = BASE_URL + END_POINT;
    return fetch(url).then(res => res.json());
};

export function getStudentMajor(major) {
    const END_POINT = `/students?major=${major}`;
    const url = BASE_URL + END_POINT;
    return fetch(url).then(res => res.json());
};

export function getStudentAge(age) {
    const END_POINT = `/students?age=${age}`;
    const url = BASE_URL + END_POINT;
    return fetch(url).then(res => res.json());
};

export function getStudentGpa(gpa) {
    const END_POINT = `/students?gpa=${gpa}`;
    const url = BASE_URL + END_POINT;
    return fetch(url).then(res => res.json());
};

export function getStudentGender(gender) {
    const END_POINT = `/students?gender=${gender}`;
    const url = BASE_URL + END_POINT;
    return fetch(url).then(res => res.json());
};

export function getPageStudents(_page, _limit) {
    const END_POINT = `/students?_page=${_page}&_limit=${_limit}`;
    const url = BASE_URL + END_POINT;
    return fetch(url).then(res => res.json());
};
// GET /posts?_sort=views&_order=asc